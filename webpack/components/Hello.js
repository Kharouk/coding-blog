import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      title: "Hello world!"
    };
    this.clickIncrement = this.clickIncrement.bind(this);
    this.randomizeTitle = this.randomizeTitle.bind(this);
  }
  clickIncrement() {
    this.setState({
      count: this.state.count + 1,
      title: `${this.randomizeTitle()}`
    });
  }
  randomizeTitle() {
    const titles = [
      "oh, you bad boy.",
      "naughty girl",
      "you like pushing buttons doncha",
      "hello world... again!",
      "why you lying?",
      "you do you."
    ];
    return titles[Math.floor(Math.random() * titles.length)];
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="flex_title">{this.state.title}</h1>
          <button className="flex_button" onClick={this.clickIncrement}>
            Click Me.
          </button>
          <p className="flex_body">{this.state.count}</p>
        </div>
      </div>
    );
  }
}

export default Hello;
