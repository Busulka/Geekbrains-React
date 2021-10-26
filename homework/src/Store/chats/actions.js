import { Author} from "../../components/Author";
import firebase from "firebase";


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

export const sendBotMessage = (chatId, message) => {
    return () => {
        firebase.database().ref('messages').child(chatId).push(message)

        let timer = setTimeout(() => {
            firebase
                .database()
                .ref('messages')
                .child(chatId)
                .push({
                    id: `message${Date.now()}`,
                    author: Author.bot,
                    text: `${message.text} to you too`,
                })

            clearTimeout(timer)
        }, 1500)
    }
}


export const addChatToDatabase = (chatId, name) => {
    return () => {
        firebase.database().ref('chats').child(chatId).push({ id: chatId, name })
    }
}

export const removeChatFromDatabase = (chatId) => {
    return async (dispatch) => {
        try {
            await firebase.database().ref('chats').child(chatId).remove()

            dispatch(deleteChat(chatId))
        } catch (error) {
            console.error(error.message)
        }
    }
}

export const subscribeChatsChangings = () => {
    return (dispatch, getState) => {
        firebase.database().ref('chats').on('child_added', (snapshot) => {
            const { id: chatId, name } = Object.values(snapshot.val())[0]

            dispatch(addChat(chatId, name))
        })

        firebase.database().ref('chats').on('child_changed', (snapshot) => {
            const { id: chatId, name } = Object.values(snapshot.val())[0]

            dispatch(addChat(chatId, name))
        })
    }
}

export const subscribeOnMessagesChangings = (chatId) => {
    return (dispatch, getState) => {
        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_added', (snapshot) => {
                console.log('child_added', snapshot.val())

                dispatch(sendMessage(chatId, snapshot.val()))
            })

        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_changed', (snapshot) => {
                console.log('child_changed', snapshot.val())

                dispatch(sendMessage(chatId, snapshot.val()))
            })
    }
}