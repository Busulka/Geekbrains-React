
export const MESSAGES_ADD_MESSAGE = 'MESSAGES_ADD_MESSAGE';

export const messageAddMessage = (message, chatId) => ({
    type: MESSAGES_ADD_MESSAGE,
    payload: {
        message,
        chatId,
    },
})
