import React from 'react';
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation(); // Fixed typo
    const isSelected = selectedConversation?._id === conversation._id; // Fixed typo

    return (
        <div>
            <div
                className={`flex gap-2 items-center hover:bg-yellow-700 rounded p-2 py-1 cursor-pointer
                    ${isSelected ? "bg-yellow-700" : ""}`}
                onClick={() => setSelectedConversation(conversation)} // Fixed typo
                role="button" // Accessibility improvement
                tabIndex={0} // Accessibility improvement
                aria-selected={isSelected} // Accessibility improvement
            >
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePic}
                            alt={`${conversation.fullName}'s profile picture`} // Accessibility improvement
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-semibold text-gray-400'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            {/* Render divider if not the last conversation */}
            {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
        </div>
    );
};

export default Conversation;
// import React from 'react'
// import useConversation from '../../zustand/useConversation'

// const Conversation = ({conversation,lastIdx,emoji}) => {
//     const {sellectedConversation, setSellectedConversation} = useConversation();
//     const isSelected = sellectedConversation?._id === conversation._id;
//     return (
//     <div>
//         <div 
//         className={`flex gap-2 items-center hover:bg-yellow-700 rounded p-2 py-1 cursor-pointer
//             ${isSelected ? "bg-yellow-700" : "" } `}
//             onClick={() => setSellectedConversation(conversation)}
//             >
//             <div className='avatar online'>
//                 <div className='w-12 rounded-full'>
//                     <img src={conversation.profilePic} alt='user avatar' />
//                 </div>
//             </div>

//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='font-semibold text-gray-400'> {conversation.fullName} </p>
//                     <span className='text-xl'>{emoji}</span>
//                 </div>
//             </div>
//         </div>
//         {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
//     </div>
//   )
// }


// export default Conversation