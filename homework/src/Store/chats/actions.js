import {Author} from "../../components/Author";


export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const SEND_MESSAGE = "CHATS::SEND_MESSAGE";

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name,
    },
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId,
});

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message,
    }
});

export const sendBotMessage = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message));
    if (message.author !== Author.bot) {
        const botMessage = {
            author: Author.bot,
            text: `${message.text} to you too`
        };
        setTimeout(() => {
            dispatch(sendMessage(chatId, botMessage));
        }, 1000);
        return () => clearTimeout();
    }
}