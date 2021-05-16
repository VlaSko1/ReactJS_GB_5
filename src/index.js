import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

class ClassExample extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Class</h1>
      </div>
    );
  }
}

/*const Example = () => {
  return (
    <div>
      <h1>Hello React1</h1>
      <ClassExample />
    </div>
  );
};
*/
//const ExampleWithoutJSX = () => React.createElement("h1", { }, "Hello WithoutJSX");

const ExampleWithoutJSX = () => {
  return React.createElement("div", null, React.createElement('h1', null, "Hello React"), React.createElement(ClassExample, null, null));
}

ReactDom.render(<ExampleWithoutJSX/>, document.getElementById("root"));

