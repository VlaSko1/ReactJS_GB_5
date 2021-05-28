import React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import { ChatList } from "../chat-list"
import { Header } from "../header"
import { MessageField } from "../message-field"
import { MessageProvider } from "../message-provider"

import './layout.css'

export class Layout extends React.Component {

  render() {
    return (
      <Switch>
        <Route path={["/chat/:roomId"]}>
          {(params) => (
            <MessageProvider {...params}>
              {(state, actions) => (
                <div className="layout">
                  {console.log(state, actions)}
                  <Header />
                  <div className="main">
                    {/* сюда передать данные из state */}
                    <ChatList />
                    <MessageField />
                  </div>
                </div>
              )}
            </MessageProvider>
          )}
        </Route>
        <Route exact path="/" render={() => <h3>Домашняя страница</h3>} />
      </Switch>
    )
  }
}
