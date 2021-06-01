import React from 'react'
import { Link } from "react-router-dom"
import './header.css'

export class Header extends React.Component {

  render() {
    return (
      <header>
        <a href="/"><h1 className="header_h1">Telegraf</h1></a>
        <h3 className="header_h3">Только лучшие и самые популярные чаты</h3>
        <ul className="menu">
          <li className="menu__link">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__link">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="menu__link">
            <Link to="/chat">Chat</Link>
          </li>
          <li className="menu__link">
            <Link to="/404">404</Link>
          </li>
        </ul>
      </header>
    )
  }

}