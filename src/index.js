import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Layout } from "./components"


const App = () => {
  return (
    <Layout/>
  )
}

const theme = createMuiTheme({})

ReactDom.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"));

