import React from 'react';
import ReactDom from 'react-dom';
import { MessageField } from './components/MessageField/MessageField'

import './index.css'


class App extends React.Component {
  
  render() {
    return (
      <div className='app__container'> 
        <MessageField/>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById("root"));

