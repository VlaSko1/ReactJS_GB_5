import { Input, InputAdornment, withStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import PropTypes from "prop-types";
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
  handleChangeInput = (e) => {
    this.props[1].handleChangeValue(e)
  }

  handleSendMessage = () => {
    const { sendMessage } = this.props[1]

    const { value } = this.props[0]

    sendMessage({ author: "User", message: value })
  }

  handlePressInput = ({ charCode }) => {

    if (charCode === 13) {
      this.handleSendMessage()
    }
  }


  render() {
    const { messages } = this.props[0];
    const { value } = this.props[0];
    return (
      <div className={styles.message__field}>
        <div className={styles.message__list}>
          {messages?.map((message, index) => (
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
              {value && <Send className={styles.icon} onClick={() => this.handleSendMessage({ author: "User", value })} />}
            </InputAdornment>
          }
        />
      </div>
    )
  }
}