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
  
  static propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string
    }))
  }
  constructor(props) {
    super(props)
    console.log(props)

  }
  
  render() {
    
    return (
      <StyledList>
        {this.props.chats.map((chat, index) => (
          // TODO доделать Chat
          <Chat title={chat.title} key={index} />/*selected={selectedIndex}*/
        ))}
      </StyledList>
    )
  }
}