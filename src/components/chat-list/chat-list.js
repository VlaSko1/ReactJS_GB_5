import React from 'react'
import { Chat } from '../chat'

export class ChatList extends React.Component {
  // TODO сделать propTypes
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }
  render() {
    const { chats, selectedIndex } = this.state
    return (
      <div>
        {chats.map((chat, index) => (
          // TODO доделать Chat
          <Chat title={chat} key={index} selected={selectedIndex}/>
        ))}
      </div>
    )
  }
}