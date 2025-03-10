import React from 'react'

const Conversation = () => {
  return (
    <div>
        <div className='flex gap-2 items-center hover:bg-yellow-700 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src='https://avatar.iran.liara.run/public/girl' alt='user avatar' />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-semibold text-gray-400'> Sudeepa Ranasinghe </p>
                    <span className='text-xl'>🐼</span>
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

//starter code snipped
// const Conversation = () => {
//     return (
//       <div>
//           <div className='flex gap-2 items-center hover:bg-yellow-700 rounded p-2 py-1 cursor-pointer'>
//               <div className='avatar online'>
//                   <div className='w-12 rounded-full'>
//                       <img src='https://avatar.iran.liara.run/public/girl' alt='user avatar' />
//                   </div>
//               </div>
  
//               <div className='flex flex-col flex-1'>
//                   <div className='flex gap-3 justify-between'>
//                       <p className='font-semibold text-gray-400'> Sudeepa Ranasinghe </p>
//                       <span className='text-xl'>🐼</span>
//                   </div>
//               </div>
//           </div>
//           <div className='divider my-0 py-0 h-1'></div>
//       </div>
//     )
//   }

export default Conversation