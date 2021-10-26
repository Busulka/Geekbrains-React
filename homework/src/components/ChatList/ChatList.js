import './chatList.css'
import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { AddChat } from './AddChat';
import {DeleteChat} from "./DeleteChat";


export const ChatList = ({ chats, chatId }) => {

    const renderChatList = (chats)=> (
        <ListItem key={chats.id} className={(chatId===chats.id) ? "active-chat" : ""} >
            <Link to={`/chats/${chats.id}`}>
                <ListItemAvatar>
                    <Avatar alt={chats.name} src={chats.img} />
                </ListItemAvatar>
                <ListItemText primary={chats.name} />
            </Link>
            <DeleteChat chatId={chats.id} />
        </ListItem>
    );

    return (
        <div className="chatList">
            <List>
                {Object.values(chats).map(renderChatList)}
            </List>
            <div className="addChatWrapper">
                <span>Add a chat</span>
                <AddChat/>
            </div>
        </div>
    );
}