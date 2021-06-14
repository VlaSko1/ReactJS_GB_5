import { CHANG_VALUE } from './types';


const initialState = {
  conversations: [
    { title: "room1", value: "room1 hello redux" },
    { title: "room2", value: "room2 redux" },
  ],
}
export function conversationsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANG_VALUE:
      return {
        ...state,
        showName: !state.showName,
      }
    default:
      return state;
  }
}