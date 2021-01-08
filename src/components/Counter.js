import React, { Component } from "react";

import classes from "./Counter.module.css";

class Counter extends Component {
  state = {
    count: this.props.count,
    step: this.props.step,
    min: this.props.min,
    max: this.props.max,
  };
  handleDecrement = () => {
    console.log("click decrement");
    const { count, step, min } = this.state;
    if (count > min) {
      this.setState((prevState) => {
        return {
          count: prevState.count - step,
        };
      });
    }
  };
  handleIncrement = () => {
    console.log("click increment");
    const { count, step, max } = this.state;
    if (count < max) {
      this.setState((prevState) => {
        return {
          count: prevState.count + step,
        };
      });
    }
  };
  render() {
    console.log(this.props);
    return (
      <>
        <h2>Counter</h2>
        <div className={classes.counterWrapper}>
          <button className={classes.decrement} onClick={this.handleDecrement}>
            -
          </button>
          <p>{this.state.count}</p>
          <button className={classes.increment} onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
