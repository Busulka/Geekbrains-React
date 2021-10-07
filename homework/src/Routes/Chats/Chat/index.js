import React, {useEffect, useState} from "react";
import {Chats} from "../index";
import {MessageList} from "../../../components/MessageList";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {Redirect, useParams} from "react-router-dom";
import {ChatArray} from "../../../components/ChatArray/ChatArray";




export const Chat = () => {
    const createMessage = (author, inputMessage, key) => ({
        author,
        inputMessage,
        key,
    })
    const [inputMessage, setInputMessage] = useState('');

    const onChange = (event) => {
        setInputMessage(event.target.value);
    }

    const [messages, setMessages] = useState([]);

    const addMessage = (...items) => {
        setMessages((messages)=>{
            return [
                ...messages,
                ...items,
            ]
        })
    }
    useEffect(() =>{

            if (messages.length !== 0) {
                {
                    if (messages[messages.length - 1].author === "User") {


                        setTimeout(() => {

                            addMessage(createMessage("Bot", inputMessage+" to you too", Date.now()+1))

                        }, 2000);



                    }
                }
            }
        },[messages]
    )
    const {chatId} = useParams();
    const chat = ChatArray.find(({id}) => id === chatId)
        if (!chat) {
            return  <Redirect to="/404"/>
        }

    return (

            <div className="allChats">
                <Chats/>
                <div className = "chat">
                    <h1>{chat.chatName}</h1>
                    <MessageList  messages={messages}/>

                    <form className="inputBox" noValidate autoComplete="off">

                        <TextField className="input" id="filled-basic" label="Write your message here" variant="outlined" color="secondary" autoFocus value={inputMessage} onChange={onChange} type="text"/>
                        <Button type="button" variant="contained" color="primary" className= "sendMsg" onClick={() =>{
                            addMessage(createMessage("User", inputMessage, Date.now()
                            ));
                        }}>Send</Button>

                    </form>
                </div>
            </div>

    );
};
