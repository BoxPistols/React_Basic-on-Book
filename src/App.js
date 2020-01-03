import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }
  render() {
    return (
      <div className="wrap">
        <h1>{this.title}</h1>
        <p>Hey! this is just a sample code</p>
      </div>
    );
  }
}

export default App;
