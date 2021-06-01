import React from 'react'
import { Switch, Route } from "react-router-dom"
import { ChatList } from "../chat-list"
import { Header } from "../header"
import { HomePage } from "../home-page"
import { MessageField } from "../message-field"
import { MessageProvider } from "../message-provider"

import { ProfilePage } from "../profile-page"

import './layout.css'

export class Layout extends React.Component {

  render() {
    return (

      <Switch>
        <Route path="/chat/:roomId">
          {(params) => (
            <MessageProvider {...params}>
              {(state, actions) => (
                <div className="layout">
                  <Header />
                  <div className="main">
                    {/* сюда передать данные из state */}
                    <ChatList {...params} {...state}/>
                    <MessageField {...state} {...actions}/>
                  </div>
                </div>
              )}
            </MessageProvider>
          )}
        </Route>
        <Route path="/chat">
          {(params) => (
            <MessageProvider {...params}>
              {(state, actions) => (
                <div className="layout">
                  
                  <Header />
                  <div className="main">
                    {/* сюда передать данные из state */}
                    <ChatList {...params} {...state} />
                    <MessageField {...state} {...actions} />
                  </div>
                </div>
              )}
            </MessageProvider>
          )}
        </Route>
        <Route exact path="/" render={() => (<HomePage/>)} />
        
        <Route exact path="/profile" render={() => (<ProfilePage />)} />
        <Route render={() => (<div><Header /><h3 className="not_found">Not found</h3></div>)} />
      </Switch>


    )
  }
}
