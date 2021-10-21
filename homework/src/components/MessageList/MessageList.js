import './messageList.css';
import React, { useCallback, useRef, useEffect } from "react";
import { Message } from "../Message/Message";
import { useSelector } from 'react-redux';
import {Author} from "../Author";
import {selectProfileName} from "../../Store/chats/selectors";


export const MessageList = ({ messageList }) => {
    const profileName = useSelector(selectProfileName);

    const renderMessageList = useCallback((mess) =>(
        <Message text={mess.text} author={mess.author === Author.user ? profileName : mess.author} key={mess.id}/>
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