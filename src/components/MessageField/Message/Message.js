import PropTypes from 'prop-types';
import React from 'react';
import  './message.css'
export class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    
  }
  constructor(props) {
    super(props);
  }

  render() {
      return <p className='message__text'>{this.props.text}</p>
  }

  
}