export const getMessages = (store) => store.messages;

export const getMessageList = (store) => getMessages(store).messageList;

export const getChatMessage = (chatId) => (store) => getMessageList(store)[chatId];