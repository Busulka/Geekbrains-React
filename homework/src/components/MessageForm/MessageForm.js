import './messageForm.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Author} from "../Author";


const useStyles = makeStyles({
    inputRoot: {
        width: '100%',
        background: '#9e9e9e',
        borderRadius: '4px',
        marginRight: '10px',
        '& label.MuiFormLabel-root': {color: '#fafafa', fontSize: 12},
        '& label.Mui-focused': {color: '#fafafa'},
        '& .MuiFilledInput-underline:after': {borderColor: '#e53935'},
        '& .MuiInputBase-input': {color: '#fafafa'}
    },

    buttonRoot: {
        background: '#323786',
        '&:hover': {background: '#e53935'},
        lineHeight: 1.5,
        color: '#fafafa',
        fontSize: 10
    }
});

const inputProps = {
    id: 'filled-size-small',
    label: 'Write your message here',
    variant: 'filled',
    size: 'small',
}

export const MessageForm = ({ onSendMessage }) => {
    const [value, setValue] = useState('');
    const classes = useStyles();
    const inputRef = useRef();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = useCallback((event) => {
            event.preventDefault();
            if (!value) return inputRef.current?.focus();
            onSendMessage({
                author: Author.user,
                text: value,
                id: Date.now()
            });
            setValue('');
        },[onSendMessage,value]
    );

    useEffect(() => {
        inputRef.current?.focus();
    },[handleSubmit]);

    return (
        <form className="messageForm" onSubmit={handleSubmit}>
            <TextField className={classes.inputRoot} inputRef={inputRef} value={value} onChange={handleChange} {...inputProps}/>
            <Button variant="contained" type="submit" className={classes.buttonRoot}>Отправить</Button>
        </form>
    );
}
