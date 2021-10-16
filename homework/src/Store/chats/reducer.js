import {CHATS_ADD_CHAT, CHATS_REMOVE} from "./actions";


const initialState = {
    chatList: [],
}

export const chatsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CHATS_ADD_CHAT:{
            return {
                chatList:[
                    ...state.chatList,
                    action.payload,
                ]
            }
        }
        case CHATS_REMOVE:{
            return{
                chatList: state.chatList.filter(({id}) => id !== action.payload)
            }
        }
        default: {
            return state;
        }
    }
}