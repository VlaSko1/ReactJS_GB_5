import React from 'react'
import { Header } from "../header"
import './profile-page.css'

export class ProfilePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="profile-page-main">
          <h1>Страница профиля</h1>
          <p>Приветствуем вас на странице профиля</p>
        </div>
      </>
    )
  }
}