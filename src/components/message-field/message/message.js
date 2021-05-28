import PropTypes from "prop-types"
import React from 'react'
import './message.css'

export class Message extends React.Component {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string,
      value: PropTypes.string,
      date: PropTypes.date,
    }),
  }
  render() {
    const { message } = this.props
    const { author, value, date } = message 
    return (
      <div>
        <h3><span>{author}: </span>{value}</h3>
        <hr/>
      </div>
    )
  }
}