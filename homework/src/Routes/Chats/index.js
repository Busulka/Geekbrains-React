import React from "react";
import {ChatList} from "../../components/ChatList/ChatList";

import {ChatArray} from "../../components/ChatArray/ChatArray";


export const Chats = () => {

    return (
        <ChatList chatArray = {ChatArray}/>
    );
};

