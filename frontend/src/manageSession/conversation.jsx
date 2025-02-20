import React from 'react'
import { create } from 'zustand'



const conversation = create((set) => ({
    selectedConversation: null,
    setselectedConversation: (selectedConversation) => set({ selectedConversation }),   
    messages : [],
    setmessages:(messages)=>set({messages}),


}))


export default conversation