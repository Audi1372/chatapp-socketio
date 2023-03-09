import React from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
const ChatContext = createContext();


const ChatProvider = ({ children }) => {
    // console.log({ children })
    const [user, setUser] = useState();
    const [selectedChat, setSelectedChat] = useState();
    const [chats, setChats] = useState();
    const [notification, setNotification] = useState([]);


    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"))
        setUser(user)
        if (!user) {
            navigate('/')
        }
        else {
            navigate('/chats')
        }

    }, [navigate]);



    return (
        <ChatContext.Provider value={{ chats, setChats, user, setUser, selectedChat, setSelectedChat, notification, setNotification, }}>{children}</ChatContext.Provider>
    )
}

export const Chatstate = () => {
    return useContext(ChatContext);
}
export default ChatProvider
