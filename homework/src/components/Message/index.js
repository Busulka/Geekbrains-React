import React from "react";
import './message.css';

export const Message = (props) => {
    return (
        <div className = 'wrapper'>
            <h1 className = 'title'>Message:</h1>
            <p className = 'message'>Current date is: {props.text}</p>
        </div>
    )
}