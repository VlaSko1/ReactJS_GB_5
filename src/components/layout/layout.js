import React from 'react'
import { ChatList } from "../chat-list"
import { Header } from "../header"
import { MessageField } from "../message-field"

import './layout.css'

export class Layout extends React.Component {

  render() {
    return (
     
      <div className="layout">
        <Header />
        <div className="main">
          <ChatList />
          <MessageField />
        </div>
      </div>
    )
  }
}