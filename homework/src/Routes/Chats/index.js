import React from "react";
import {ChatList} from "../../components/ChatList/ChatList";

export const Chats = () => {
    const chatArray = [
        {
            chatId: '1',
            chatName: 'Cuisine',
            text:'Lorem ipsum'
        },
        {
            chatName: 'Entertainment',
            chatId: '2',
            text:'Lorem ipsum'
        },
        {
            chatName: 'Travel',
            chatId: '3',
            text:'Lorem ipsum'
        },


    ]
    return (
        <ChatList chatArray = {chatArray}/>
    );
};

