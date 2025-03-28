import { useEffect, useState, createContext, useContext } from "react";
import { io } from "socket.io-client"; // Import io from socket.io-client
import { useAuthContext } from "./AuthContext";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({children}) => {
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io ("http://localhost:5000",{
                query:{
                    userId : authUser._id,
                },
            });
            setSocket(socket);

            //socket.on() is used to the events,can be used both on client and server side
            socket.on("getOnlineUser",(users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);
    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>;
}