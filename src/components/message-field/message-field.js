import { Input, InputAdornment, withStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React from 'react'
import { connect } from 'react-redux'
import { changValue } from "../../store/conversations"
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

class MessageFieldView extends React.Component {
  // action в store/conversations
  /*handleChangeInput = (e) => {
    this.props[1].handleChangeValue(e)
  }

  handleSendMessage = () => {
    const { sendMessage } = this.props[1]

    const { value } = this.props[0]

    sendMessage({ author: "User", message: value })
  }*/

  handlePressInput = ({ charCode }) => {

    if (charCode === 13) {
      this.handleSendMessage()
    }
  }


  render() {
    console.log(this.props); return;
    const { messages } = this.props.messages; // возможно нужно добавить [0] 
    const { value } = this.props.conversations; // возможно нужно добавить [0] 
    const { changValue } = this.props.changValue
    return (
      <div className={styles.message__field}>
        <div className={styles.message__list}>
          {messages?.map((message, index) => (
            <Message message={message} key={index} />
          ))}
        </div>
        <StyledInput
          onChange={changValue}
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

const mapStateToProps = (state, props) => {

  return {
    conversations: state.conversationsReducer.conversations,
    messages: state.messagesReducer.messages
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changValue: (e) => dispatch(changValue(e)),
  }
}

export const MessageField = connect(mapStateToProps, mapDispatchToProps)(MessageFieldView);