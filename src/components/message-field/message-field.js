import { Input, InputAdornment, withStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React from 'react'
import { Message } from "./message"

import styles from './message-field.module.css'

const StyledInput = withStyles((theme) => ({
  root: {
    "&": {
      color: "black",
      padding: '10px 15px',
      fontSize: "15px",
      height: "5vh"
    }
  }
}))(Input)

export class MessageField extends React.Component {
  state = {
    messages: [{ author: "User", value: "Привет!", date: new Date() }],
    value: '',
  }


  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state

    const lastMessage = messages[messages.length - 1]

    if (lastMessage.author === "User" && prevState.messages !== messages) {
      setTimeout(() => {
        this.setState({
          messages: [...messages,
          { author: "Bot", value: "как дела?", date: new Date() }
          ],
        })
      }, 500)
    }
  }

  sendMessage = ({ author, value }) => {
    const { messages } = this.state

    this.setState({
      messages: [...messages, { author, value, date: new Date() }],
      value: '',
    })
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      value: target.value,
    })
  }

  handlePressInput = ({ charCode }) => {
    const { value } = this.state

    if (charCode === 13) {
      this.sendMessage({ author: "User", value })
    }
  }


  render() {
    const { messages, value } = this.state;

    return (
      <div className={styles.message__field}>
        <div className={styles.message__list}>
          {messages.map((message, index) => (
            <Message message={message} key={index} />
          ))}
        </div>
        <StyledInput
          onChange={this.handleChangeInput}
          onKeyPress={this.handlePressInput}
          value={value}
          placeholder="Введите сообщение..."
          fullWidth={true}
          className={styles.stiled_input}
          endAdornment={
            <InputAdornment position="end">
              {value && <Send className={styles.icon} onClick={() => this.sendMessage({ author: "User", value })} />}
            </InputAdornment>
          }
        />
      </div>
    )
  }
}