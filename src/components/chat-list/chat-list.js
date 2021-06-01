import { List, withStyles } from '@material-ui/core';
import React from 'react'
import { Link } from "react-router-dom"
import { Chat } from './chat'


const StyledList = withStyles({
  root: {
    background: '#DCDCDC',
    color: 'black',
    height: '100%',
    padding: '10px 30px',
    width: "15%",
    fontSize: "18px",
    lineHeight: "30px",
    boxSizing: "border-box"
  },

})(List);

export class ChatList extends React.Component {
  render() {
    
    const {
      "0": {conversations},
      "0": {allMessages},
      match: { params },
    } = this.props

    const chatId = params.roomId

    return (
      <StyledList >
        {conversations.map((chat) => {
          const currentMessage = allMessages[chat.title]

          return (
            <Link key={chat.title} to={`/chat/${chat.title}`}>
              <Chat 
                selected={chat.title === chatId}
                chat={chat}
                lastMessage={currentMessage[currentMessage.length - 1]}
              />
            </Link>
          )
        })}
      </StyledList>
    )
  }
}