import {MESSAGES_ADD_MESSAGE} from "./actions";


const initialState = {
    messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action?.type){
        case MESSAGES_ADD_MESSAGE:{
            const {message, chatId} = action.payload;
            const newMessages = {
                ...state.messageList,
            }
            if (chatId in state.messageList) {
                newMessages[chatId] = [...newMessages[chatId],
                    message,
                    ]
            } else {
                newMessages[chatId] = [
                    message,
                ]
            }
            return {
                messages: newMessages,
            }
        }
        default: {
            return state;
        }
    }
}