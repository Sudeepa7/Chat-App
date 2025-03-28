import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin : ["http://localhost:3000"],
        methods : ["GET","POST"],
    },
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; //{userId:socketid}

io.on("connection", (socket) =>{
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId !== "undefines") userSocketMap[userId] = socket.id;

    //io.emit() is used to send events to all the connected cliets
    io.emit("getOnlineUser",Object.keys(userSocketMap));

    //socket.on() is used to listen to the events,can be used on both client and server side
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUser", Object.keys(userSocketMap));
    });
});
// app.set("io",io);
// Export the app and server
export { app, io, server };