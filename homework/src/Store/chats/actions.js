
export const CHATS_ADD_CHAT = 'CHATS_ADD_CHAT';

export const CHATS_REMOVE ='CHATS_REMOVE'

export const chatsAddChat = (chat) => ({
    type: CHATS_ADD_CHAT,
    payload: chat,
})

export const chatsRemove = (chatId) => ({
    type: CHATS_REMOVE,
    payload: chatId,
})