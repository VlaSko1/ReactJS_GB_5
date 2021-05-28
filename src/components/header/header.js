import React from 'react'
import { Link } from "react-router-dom"
import './header.css'

export class Header extends React.Component {

  render() {
    return (
      <header>
        <h1 className="header_h1">Telegraf</h1>
        <h3 className="header_h3">Только лучшие и самые популярные чаты</h3>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/topics">topics</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
        </ul>
      </header>
    )
  }

}