import React from 'react'
import useConversation from '../../zustand/useConversation';
import {useAuthContext} from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-yellow-600" : "";

    const shakeClass = message.shouldShake ? "shake" : ""

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-white">{extractTime(message.createdAt)}</div>
        </div>
    )
}

export default Message