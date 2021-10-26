import './messageList.css';
import React, { useCallback, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { uid } from 'uid';
import { Message } from '../Message/Message';
import {Author} from "../Author"
import {selectProfileName} from "../../Store/chats/selectors";


export const MessageList = ({ messageList }) => {
    const profileName = useSelector(selectProfileName);

    const renderMessageList = useCallback((mess) =>(
        <Message text={mess.text} author={mess.author === Author.user ? profileName : mess.author} key={uid()} />
    ), [profileName]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messageList]);

    return (
        <div className="messageChat">
            {messageList.map(renderMessageList)}
            <div ref={messagesEndRef} />
        </div>
    );
}