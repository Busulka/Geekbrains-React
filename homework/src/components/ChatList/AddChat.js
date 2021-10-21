import './addChat.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addChat} from "../../Store/chats/actions";


export const AddChat = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            return;
        }
        const newId = `chat${Date.now()}`

        dispatch(addChat(newId, value));

        setValue('');
    }

    return (
        <form className="addChatForm" onSubmit={handleSubmit}>
            <input className="addChatInput" placeholder="Add a chat name" onChange={handleChange} value={value} />
        </form>
    )
}