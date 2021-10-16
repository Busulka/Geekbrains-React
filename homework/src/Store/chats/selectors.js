
export const getChats = (store) => store.chats;

export const getChatList = (store) => getChats(store)?.chatList || [];

export const getChatById = (store) => (chatId) => getChatList(store).find(({id}) => id === chatId);