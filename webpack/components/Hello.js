import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  clickIncrement() {
    this.state.count++;
  }
  render() {
    return (
      <div>
        <h1>Hey you all.</h1>
        <button onClick="clickIncrement()">Click Me.</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Hello;
