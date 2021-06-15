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
      {
      const { e, params } = action.payload
      const {
        target: { value }
      } = e

      return {
        ...state,
        conversations: state.conversations.map(conversation => {
          if (params.roomId === conversation.title) {
            return { ...conversation, value }
          }

          return conversation
        }),
      }
    }
    default:
      return state;
  }
}