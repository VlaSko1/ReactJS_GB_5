//import { CHECK_PROFILE } from './types';

const initialState = {
  messages: {
    room1: [{ author: "User", message: "Привет! Redux", date: new Date() }],
    room2: [{ author: "User", message: "Привет room2! Redux", date: new Date() }],
  },
}
export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    /*case CHECK_PROFILE:
      return {
        ...state,
        showName: !state.showName,
      }*/
    default:
      return state;
  }
}