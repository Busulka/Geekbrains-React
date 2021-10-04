import React from "react";

export const MessageList = (props) => {


    return ( <div className="chatBox">
        <ul>{

            props.messages.map(({author, inputMessage, key}) => <li key= {key} className="message">

                <h3>
                    {author}:
                </h3>
                <p>{inputMessage}</p>
            </li>)
        }
        </ul>
    </div>)
};