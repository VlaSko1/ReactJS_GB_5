import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { Layout } from "./components"
import { store } from "./store"


const App = () => {
  return (
    <Layout />
  )
}

const theme = createMuiTheme({})

ReactDom.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"));

