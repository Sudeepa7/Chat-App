import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput';
import { IoMdChatboxes } from "react-icons/io";

const MessageContainer = () => {
const NochatSelected =true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
       {NochatSelected ? (<NoChatSelected/>) : (
         <>
         {/* {Header} */}
         <div className='bg-slate-500 px-4 py-2 mb-2'>
             <span className='label-text'>To:</span> <span className='text-grey-900 font-bold'>John doe</span>
         </div>
         <Messages/>
         <MessageInput/>
     </>
       )}
    </div>
  );
};

const NoChatSelected =() =>{
 return(
    <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-green-200 font-semibold flex flex-col items-center gap-2'>
            <p>Welcome 👋 Chanchala 🪭</p>
            <p>Select a chat to start messaging</p>     
            <IoMdChatboxes className='text-3xl md:text-6xl text-center'/>     
        </div>
    </div>
 )
}

export default MessageContainer;

//first code
// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput';

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//         <>
//             {/* {Header} */}
//             <div className='bg-slate-500 px-4 py-2 mb-2'>
//                 <span className='label-text'>To:</span> <span className='text-grey-900 font-bold'>John doe</span>
//             </div>
//             <Messages/>
//             <MessageInput/>
//         </>
//     </div>
//   );
// };

// export default MessageContainer;
