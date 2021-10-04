import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";


    export const ChatList = (props) => {



        return <List >
            {props.chatArray.map((chat, i) => {
                return (
                    <ListItem alignItems="flex-start" key={i}>
                        <ListItemText
                            primary={chat.id}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                        {chat.chatName}
                                        <br/>
                                        {chat.text}
                                    </Typography>

                                </React.Fragment>
                            }
                        />
                        <Divider variant="inset" component="li" />
                    </ListItem>


                )
            })}
        </List>
    }
