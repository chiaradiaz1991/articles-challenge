
import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import Home from './js/pages/Home.jsx';

class App extends React.Component {
  render() {
    return <div><Home /></div>;
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
