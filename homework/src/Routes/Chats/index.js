import React from "react";
import {ChatList} from "../../components/ChatList/ChatList";
import {ChatArray} from "../../components/ChatArray/ChatArray";
import {chatsAddChat} from "../../Store/chats/actions";


export const Chats = (props) => {

    return (
        <div>
            <ChatList chatArray = {ChatArray}/>
            <button onClick={() =>{
                chatsAddChat({
                    id: Date.now(),
                    chatName: 'Title',
                    text: 'text',
                })
            }}>
                Add Chat
            </button>
        </div>


    );
};

