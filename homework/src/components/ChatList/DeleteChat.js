import './chatList.css'
import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch } from 'react-redux';
import {deleteChat, removeChatFromDatabase} from "../../Store/chats/actions";


export const DeleteChat = (chatId) => {
    const dispatch = useDispatch();

    const onDeleteChat = () => {
        dispatch(removeChatFromDatabase(chatId));
    }

    return (
        <div className="deleteChat" onClick={onDeleteChat}><DeleteForeverIcon /></div>
    )
}