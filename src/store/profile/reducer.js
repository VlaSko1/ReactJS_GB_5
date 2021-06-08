import { CHECK_PROFILE } from './types';

const initialState = {
  showName: false,
  name: "Guest",
}

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_PROFILE:
      return {
        ...state,
        showName: !state.showName,
      }
    default:
      return state;
  }
}