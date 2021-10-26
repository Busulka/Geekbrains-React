import './chats.css';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageList } from '../../components/MessageList/MessageList';
import { MessageForm } from '../../components/MessageForm/MessageForm';
import { ChatList } from '../../components/ChatList/ChatList';
import {selectChats} from "../../Store/chats/selectors";
import {sendBotMessage, sendMessage} from "../../Store/chats/actions";


export const Chats = () => {
    const { chatId } = useParams();

    const chats = useSelector(selectChats);

    const dispatch = useDispatch();

    const handleSendMessage = useCallback((newMessage) => {
            if(chatId !== 'chat1') {
                dispatch(sendMessage(chatId, newMessage));
            } else {
                dispatch(sendBotMessage(chatId, newMessage));
            }
        },
        [chatId, dispatch]
    );

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
