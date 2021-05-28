import React from 'react'
import { Header } from "../header"
import './home-page.css'

export class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-page-main">
          <h1>Главная страница</h1>
          <p>Приветствуем вас на сайте лучшего чата сети, вас ждут самые интересные чаты на самые актуальные темы</p>
        </div>
      </>
    )
  }
}