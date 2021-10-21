import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { chatsReducer } from "./chats/reducer";
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';



import {profileReducer} from "./profile/toggle/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'Chat',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persist = persistStore(store);

