import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversations';


const SearchInput = () => {
  const [search,setSearch] = useState("");
  const { setSelectedConversation} = useConversation(); // Single destructuring
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error('No such user found!');
    }
  };
  
  return (
   <form onSubmit={handleSubmit} className='flex items-center gap-2'>
    <input 
    type="text" 
    placeholder='Search ...' 
    className='input input-bordered rounded-full' 
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    ></input>
        <button type='submit' className='btn btn-circle border-amber-50 bg-yellow-600 text-white'>
        <IoSearch className='w-6 h-6 border-none'/>
        </button>
   </form>
  )
}

// const SearchInput = () => {
//   return (
//    <form className='flex items-center gap-2'>
//     <input type="text" placeholder='Search ...' className='input input-bordered rounded-full'></input>
//         <button type='submit' className='btn btn-circle border-amber-50 bg-yellow-600 text-white'>
//         <IoSearch className='w-6 h-6 border-none'/>
//         </button>
//    </form>
//   )
// }

export default SearchInput;
