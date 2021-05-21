import React from 'react';
import ReactDom from 'react-dom';
import { MessageField } from './components/MessageField/MessageField'



import './index.css'


class App extends React.Component {
  
  constructor(props) {
    super(props);
    

    this.state = {
      counter: 0,
      messages: []
    };
    
  }
  

  render() {
    console.log("render");
    return (
      <div className='app__container'> 
        <MessageField/>
      </div>
    )
  }
}

ReactDom.render(
    <App />, document.getElementById("root"));

