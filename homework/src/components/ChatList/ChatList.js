import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import { Link} from "react-router-dom";


export const ChatList = (props) => {



        return <List >
            {props.chatArray.map((chat, i) => {
                return (
                    <Link to={`/chats/${chat.chatId}`}>
                    <ListItem alignItems="flex-start" key={i}>
                        <ListItemText
                            primary={chat.chatName}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >

                                        {chat.text}
                                    </Typography>

                                </React.Fragment>
                            }
                        />
                        <Divider variant="inset" component="li" />
                    </ListItem>
                    </Link>


                )
            })}
        </List>

    }
