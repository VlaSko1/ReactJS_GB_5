import React from "react";

export class MessageProvider extends React.Component {
  state = {
    conversations: [
      { title: "room1", value: "room1 test" }, // в value мы храним сообщение которое набрали и не отправили (в инпуте оно)
      { title: "room2", value: "room2 test" }, 
    ],
    messages: { 
      room1: [{author: "User", message: "Привет!", date: new Date()}], 
      room2: [{ author: "User", message: "Привет room2!", date: new Date() }],
    },
  }

  handleChangeValue = (event) => {
    const { match } = this.props
    const { params } = match // :roomId передаем в Route

    const {
      target: {value}
    } = event // Это ивент инпута
   

    this.setState({
      conversations: this.conversations.map( conversation => {
        if (params.roomId === conversation.title) {
          return {...conversation, value}
        }

        return conversation
      }),
    })
  }

  sendMessage = ({author, message}) => {
    if (!message) {
      return
    }

    const { messages } = this.state
    const { match } = this.props
    const { params } = match  // :roomId передаем в Route

    const newMessage = { author, message, date: new Date() }

    this.setState({
      messages: {
        ...messages,
        [params.roomId]: [...(messages[params.roomId] || []), newMessage]
      }
    })
  }

  componentDidUpdate() {
    // TODO добавь сюда ответ бота (перенеси из компонента message-field кажется инемного переделать)
  }

  render() {
    const {children, match} = this.props
    const {params} = match

    const {conversations, messages} = this.state

    const state = {
      conversations, // их будет использовать ChatList, то есть эти конверсешены мы передаем в чат листи и там их мапаем
      messages: messages[params.roomId] || [], // roomId это id текущей комнаты
      value: conversations.find((conversation) => conversation.title === params.roomId)?.value || '',
        
    }
    

    const actions = {
      sendMessage: this.sendMessage,
      handleChangeValue: this.handleChangeValue,  

    }
    // render-prop
    return children([state, actions])
  }
}