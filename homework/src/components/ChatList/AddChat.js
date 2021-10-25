import React from 'react';
import { useDispatch } from 'react-redux';
import { uid } from 'uid';


import { makeStyles } from '@material-ui/core/styles';
import {addChat, addChatToDatabase, subscribeChatsChangings} from "../../Store/chats/actions";
import {useInput} from "../../Store/useInput";
import {Form} from "../Form/Form";

export const useStyles = makeStyles({
    inputRoot: {
        width: '120px',
        background: '#9e9e9e',
        borderRadius: '4px',
        marginRight: '5px',
        '& label.MuiFormLabel-root': {color: '#fafafa', fontSize: 12},
        '& label.Mui-focused': {color: '#fafafa'},
        '& .MuiFilledInput-underline:after': {borderColor: '#fafafa'},
        '& .MuiInputBase-input': {color: '#fafafa'},
        '& .MuiFilledInput-inputMarginDense': {paddingTop: '20px'}
    },

    buttonRoot: {
        background: '#a836f4',
        '&:hover': {background: '#e535b3'},
        color: '#fafafa',
        fontSize: 10,
    }
});



export const buttonProps = 'Save';



export const AddChat = () => {
    const dispatch = useDispatch();

    const { value, handleChange, reset} = useInput('');

    React.useEffect(() => {
        dispatch(subscribeChatsChangings())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            return;
        }
        const newId = `chat${uid()}`

        dispatch(addChatToDatabase(newId, value));

        reset();
    }

    return (
        <Form
            value={value}
            useStyles={useStyles}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            buttonProps={buttonProps}
        />
    )
}