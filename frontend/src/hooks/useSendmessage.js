import React, { useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendmessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation(); // Fixed typo and setter function

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: { // Corrected header key
                    "Content-Type": "application/json", // Corrected content type
                },
                body: JSON.stringify({ message }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to send message"); // Check for fetch errors

            setMessages([...messages, data]); // Corrected spread syntax for messages
        } catch (error) {
            toast.error(error.message); // Display error message
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendmessage;


// import React, { useState } from 'react'
// import useConversation from '../zustand/useConversation';
// import toast from 'react-hot-toast';

// const useSendmessage = () => {
//     const [loading,setLoading] = useState(false);
//     const {messages,setMessage,sellectedConversation} = useConversation();

//     const sendMessage = async  (message) => {
//         setLoading(true);
//         try {
//             const res = await fetch(`/api/messages/send/${sellectedConversation._id}`,{
//                 method:"POST",
//                 header: {
//                     "Content-Type":"Application/json"
//                 },
//                 body : JSON.stringify({message})
//             })
//             const data = await res.json()
//             if(data.error) throw new Error(data.error)

//             setMessage({...messages,data});
//         }catch (error) {
//             toast.error(error.message);
//         }finally {
//             setLoading(false);
//         }
//     }
//   return {sendMessage,loading}
// }

// export default useSendmessage