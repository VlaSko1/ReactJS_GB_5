import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile'

const reducers = combineReducers({ profileReducer });


export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);