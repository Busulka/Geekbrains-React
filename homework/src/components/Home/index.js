import './home.css';
import React from 'react';
import { useCallback, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Author} from "../Author";
import {selectChats} from "../../Store/chats/selectors";
import {sendMessage} from "../../Store/chats/actions";
import {ChatList} from "../ChatList/ChatList";
import {MessageList} from "../MessageList/MessageList";
import {MessageForm} from "../MessageForm/MessageForm";

export const Home = () => {
    const { chatId } = useParams();

    const chats = useSelector(selectChats);

    const dispatch = useDispatch();

    const handleSendMessage = useCallback((newMessage) => {
            dispatch(sendMessage(chatId, newMessage));
        },
        [chatId, dispatch]
    );

    useEffect(() => {
        if (
            !chatId ||
            !chats[chatId] ||
            chats[chatId].name !== "Bot" ||
            !chats[chatId]?.messages.length ||
            chats[chatId].messages[chats[chatId].messages.length - 1].author === "Bot"
        ) {return}

        const robotText = chats[chatId].messages[chats[chatId].messages.length - 1].text +  'to you too!'

        const robotMsg = {
            author: Author.bot,
            text: robotText,
            id: Date.now()
        }
        setTimeout(() => {
            handleSendMessage(robotMsg);
        }, 1000);

        return () => clearTimeout();

    }, [chats, chatId, handleSendMessage]);

    if (chatId && !chats[chatId]) {
        return <Redirect to="/home" />;
    }

    return (
        <>
            <h1 className="header">Select a chat</h1>
            <div className="chat-wrapper">
                <ChatList chats={chats} chatId={chatId}/>
                <div className="messageList-wrapper">
                    {!!chatId && <div>
                        <MessageList messageList={chats[chatId].messages} />
                        <MessageForm  onSendMessage={handleSendMessage}/>
                    </div>}
                </div>
            </div>
        </>
    );
}