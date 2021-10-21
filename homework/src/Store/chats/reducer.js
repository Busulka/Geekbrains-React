import {ADD_CHAT, DELETE_CHAT, SEND_MESSAGE} from "./actions";
import {ChatArray} from "../../components/ChatArray/ChatArray";


const initialState = ChatArray

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_CHAT: {
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: [],
                    text: null,
                }
            }
        }

        case DELETE_CHAT: {
            const newState = {...state};
            delete newState[payload.chatId];
            return newState;
        }

        case SEND_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message],
                }
            }
        }
        default: return state;
    }
}