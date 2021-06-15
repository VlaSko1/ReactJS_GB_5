import { createStore, combineReducers } from 'redux';
import { conversationsReducer } from './conversations'
import { messagesReducer } from './messages'
import { profileReducer } from './profile'


const reducers = combineReducers({ profileReducer, conversationsReducer, messagesReducer });


export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);