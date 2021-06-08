import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile'

const reducers = combineReducers({ profileReducer });


export const store = createStore(reducers);