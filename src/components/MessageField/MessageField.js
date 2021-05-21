import React from 'react';
import { Message } from './Message/Message'

import './message_filed.css'

export class MessageField extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      message: "Сообщение",
      messages: [],
      author: "Джек",
      robot: 0,
    };
  }
  handleClick = () => {
    this.setState({ messages: [...this.state.messages, `${this.state.author}: ${this.state.message}-${this.state.count + 1}`], 
                    count: this.state.count + 1,  
                    robot: this.state.robot + 1,
                    sayMessage: this.state.author,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.state.robot === 1) {
      const answer = `Robot: Не приставай ко мне, ${this.state.author}, я робот!`
      this.setState({ messages: [...this.state.messages, answer], robot: this.state.robot - 1});
    }
  }
  
  render() {
    const messageElement = this.state.messages.map((text, index) => {
      
      return <Message key={index} text={text} />
    })

    return (
      <div className='messages__container'>
        <button onClick={this.handleClick}>Отправить сообщение</button><br/>
        { messageElement }
      </div>
    )
  }

}