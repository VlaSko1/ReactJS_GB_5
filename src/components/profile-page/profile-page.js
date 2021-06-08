import React from 'react'
import { connect } from 'react-redux'
import { checkProfile } from "../../store/profile"
import { Header } from "../header"
import './profile-page.css'



class ProfilePageView extends React.Component {
  render() {
    const {showName, name, checkProfile } = this.props
    return (
      <>
        <Header />
        <div className="profile-page-main">
          <h1>Страница профиля</h1>
          <p>Приветствуем вас на странице профиля</p>
          {showName && <p>{name}</p> }
          <span>Checked</span><input type="checkbox" checked={showName} onChange={checkProfile} />
        </div>
      </>
    )

  }

}
const mapStateToProps = (state, props) => {
  
  return {
    showName: state.profileReducer.showName,
    name: state.profileReducer.name
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkProfile: () => dispatch(checkProfile()),
  }
}
export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePageView);