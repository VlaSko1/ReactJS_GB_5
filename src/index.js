import PropTypes from 'prop-types';
import React, { Component, createRef, useState } from 'react';
import ReactDom from 'react-dom';

import styles from './index.module.css'

//import './index.css';
console.log('styles', styles)

class Example extends React.Component {

  static propTypes = {
    age: PropTypes.number.isRequired, 

  }
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      counter: 0,
      messages: []
    };
    this.timerId = null;

    //this.ref = createRef();
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null
  }

  foo = () => { 
    //this.setState({counter: this.state.counter + 1}) 
    //this.setState((state) => ({counter: state.counter + 1}))
    this.setState(
      (state) => ({ messages: [...this.state.messages, "test"]}),
      () => {
        console.log(this.state)
      }
    )
  };
  foo2 = () => { 
    console.log("click")
    //this.setState({counter: this.state.counter + 1})
  };

  componentDidMount() {
    console.log("componentDidMount", /*this.ref.current*/)
    //this.ref.current.focus()
    //document.addEventListener('click', this.foo2);

    /*this.timerId = setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, (1000))*/

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return {age: 12}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", snapshot);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.foo2);
    clearInterval(this.timerId);

  }

  

  render() {
    console.log("render");
    return (
      <div className={styles.wrapper}> 
        <h1 onClick={this.foo}>Example {this.state.counter}</h1>
        <input ref={this.ref}/>
      </div>
    )
  }
}
const Test = () => {
  const [isVizible, setState] = useState(true)
  //throw new Error("opps!");
  return (
    <div>
      <button onClick={() => setState(!isVizible)}>set state</button>
      {isVizible ? <Example /> : null}
    </div>
  )
};

/*class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    return { hasError: true}
  }

  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error, info) {
    
    console.error({error, info})
  }
  

  render() {
    if (this.state.hasError) {
      return <h1>Произошла ошибка</h1>
    }
    return this.props.children
  }
}*/

ReactDom.render(
  //<ErrorBoundary>
    <Example age={12}/>
 /* </ErrorBoundary>*/, document.getElementById("root"));

