import express from "express";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
import { getReceiverSocketId,io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user?._id;

        // Validate input
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }
        if (!senderId) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        // Find or create a conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Create a new message
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        // Add the message to the conversation
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // Save conversation and message in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // Emit the new message to the receiver
        // const io = req.app.get("io");
        // console.log("IO instance:", io);
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in message controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params; // Corrected to req.params
        const senderId = req.user._id;

        // Find the conversation between the sender and receiver
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); //not reference but the actual message

        // Check if conversation exists
        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        // Return messages from the conversation
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
