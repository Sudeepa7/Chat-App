import React, { useEffect, useRef } from 'react'; // Added useRef
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkelton from '../skeltons/MessageSkelton'
import uselistenMesages from '../../hooks/uselistenMessages';

const Messages = () => {
  const {messages,loading} = useGetMessages();
  console.log("messages:",messages);
  uselistenMesages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    },100);
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && 
      messages.length > 0 && 
      messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
        <Message message={message}/>
        </div>
      ))}
      {loading && [...Array(2)].map((_,idx) => <MessageSkelton key={idx}/>)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages;