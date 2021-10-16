import {CHATS_ADD_CHAT, CHATS_ADD_LIST, CHATS_REMOVE} from "./actions";


const initialState = {
    chats: [],
}

export const chatsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CHATS_ADD_CHAT:{
            return {
                ...state,
                chats:[
                    ...state.chats,
                    action.payload,
                ]
            }
        }
        case CHATS_ADD_LIST: {
            return {
                ...state,
                chats: action.payload,
            }
        }
        case CHATS_REMOVE:{
            const newChats = state.chats.filter((item) => item.id !== action.payload);
            return{
                ...state,
                chats: newChats
            }
        }
        default: {
            return state;
        }
    }
}