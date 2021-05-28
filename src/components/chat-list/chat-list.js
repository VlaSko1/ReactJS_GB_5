import { List, withStyles } from '@material-ui/core';
import PropTypes from "prop-types"
import React from 'react'
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
  // TODO сделать propTypes
  static propTypes = {

  }
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }
  render() {
    const { chats, selectedIndex } = this.state
    return (
      <StyledList>
        {chats.map((chat, index) => (
          // TODO доделать Chat
          <Chat title={chat} key={index} selected={selectedIndex}/>
        ))}
      </StyledList>
    )
  }
}