import React, { useCallback, useEffect, useRef } from 'react';
import { uid } from 'uid';
import { Form } from '../Form/Form';
import {useInput} from "../../Store/useInput";
import {Author} from "../Author";
import {buttonProps, useStyles} from "../ChatList/AddChat";


export const MessageForm = ({ onSendMessage }) => {
    const inputRef = useRef();

    const { value, handleChange, reset} = useInput('');

    const handleSubmit = useCallback((event) => {
            event.preventDefault();
            if (!value) return inputRef.current?.focus();
            onSendMessage({
                author: Author.user,
                text: value,
                id: uid(),
            });
            reset();
        },[onSendMessage,value, reset]
    );

    useEffect(() => {
        inputRef.current?.focus();
    },[handleSubmit]);

    return (
        <Form
            value={value}
            useStyles={useStyles}
            inputRef={inputRef}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            buttonProps={buttonProps}
        />
    );
}