import React from 'react';
import ReactDom from 'react-dom';

import './index.css';


const arrText = [];

function writeText() {
  arrText.push("Нормально");
  ReactDom.render(<Text messages = { arrText }/>, document.getElementById("text"));
}

const Text = (props) => {
  return props.messages.map(message => <Ptext text = { message }/>);
};

const App = () => {
  return (
    <main>
      <button id="btn">Оставить сообщение</button>
      <div id="text"></div>
    </main>
  );
};

const Ptext = (props) => <p>{props.text}</p>;


window.onload = function() {
  document.getElementById("btn").addEventListener('click', () => writeText() );
}


ReactDom.render(<App/>, document.getElementById("root"));

