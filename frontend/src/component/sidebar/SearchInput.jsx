import React from 'react'
import { IoSearch } from "react-icons/io5";


const SearchInput = () => {
  return (
   <form className='flex items-center gap-2'>
    <input type="text" placeholder='Search ...' className='input input-bordered rounded-full'></input>
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
