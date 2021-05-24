import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from 'react';
import ReactDom from 'react-dom';
import { MessageField, ChatList } from "./components"


const App = () => {
  return (
    // @TODO сделать Layout
    <div style={{display: "flex"}}>
      <ChatList/>
      <hr/>
      <MessageField />
    </div>
  )
}

const theme = createMuiTheme({})

ReactDom.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root"));

