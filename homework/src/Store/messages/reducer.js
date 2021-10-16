import {MESSAGES_ADD_MESSAGE, MESSAGES_ADD_LIST} from "./actions";


const initialState = {
    messages: []
}

export const messagesReducer = (state = initialState, action) => {

    switch (action.type){
        case MESSAGES_ADD_MESSAGE:{
            return {
                ...state,
                messages:[
                    ...state.messages,
                    action.payload,
                ]
            }
        }
        case MESSAGES_ADD_LIST: {
            return {
                ...state,
                messages: action.payload,

            }

        }
        default: {
            return state;
        }
    }
}