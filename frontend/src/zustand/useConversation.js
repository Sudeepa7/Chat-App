import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null, // Fixed typo
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }), // Fixed typo
  messages: [], // Changed to plural for clarity
  setMessages: (messages) => set({ messages }), // Fixed setter function name
}));

export default useConversation;


// import { create } from 'zustand'

// const useConversation = create((set) => ({
//   sellectedConversation : null,
//   setSellectedConversation: (sellectedConversation) => set({sellectedConversation}),
//   message : [],
//   setMessage : (message) => set({message}),
// }));

// export default useConversation;