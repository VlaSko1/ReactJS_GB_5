import React from 'react'
import './header.css'

export class Header extends React.Component {

  render() {
    return (
      <header>
        <h1 className="header_h1">Telegraf</h1>
        <h3 className="header_h3">Только лучшие и самые популярные чаты</h3>
      </header>
    )
  }

}