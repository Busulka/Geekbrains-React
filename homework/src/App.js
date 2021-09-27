import React, {useEffect, useState} from "react";
import './App.css';

function App (){
    const createMessage = (author, inputMessage) => ({
        author,
        inputMessage,
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
                            addMessage(createMessage("Bot", inputMessage+" to you too"))
                        }, 2000);



                    }
                }
            }
        },[messages]
    )
    return (
        <div className = "chat">
            <div className = "chatBox">
                <ul>{
                    messages.map(({author, inputMessage}) => <li className='message'>
                        <h3>
                            {author}:
                        </h3>
                        <p>{inputMessage}</p>
                    </li>)
                }
                </ul>
            </div>
            <form className="inputBox">
                <input className="input" value={inputMessage} onChange={onChange} type="text" />
                <button className="inputButton" type="button" onClick={() =>{
                    addMessage(createMessage("User", inputMessage
                    ));
                }}>Send</button>
            </form>
        </div>
    )
}
export default App;
