import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../styles/calculator";

const ops = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  x: (num1, num2) => num1 * num2,
};
export default class Calculator extends Component {
  state = {
    expression: "",
  };

  onNumberOpClick = (event) => {
    this.setState({
      expression: this.state.expression + event.target.textContent,
    });
  };

  clear = () => {
    this.setState({
      expression: "",
    });
  };

  calculate = () => {
    const { expression } = this.state;
    const match = expression.match(/(\d+)([+\-x])(\d+)/);
    if (!match) {
      return this.clear();
    }
    const num1 = Number(match[1]);
    const op = ops[match[2]];
    const num2 = Number(match[3]);
    this.setState({
      expression: op(num1, num2),
    });
  };
  render = () => (
    <div className="page calculator">
      <h1>在线计算器</h1>
      <div className="calc-pad">
        <div className="calc-display">{this.state.expression || 0}</div>
        <div onClick={this.onNumberOpClick} className="calc-op">
          +
        </div>
        <div onClick={this.onNumberOpClick} className="calc-op">
          -
        </div>
        <div onClick={this.onNumberOpClick} className="calc-op">
          x
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          7
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          8
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          9
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          4
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          5
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          6
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          1
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          2
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          3
        </div>
        <div onClick={this.onNumberOpClick} className="calc-num">
          0
        </div>
        <div onClick={this.clear} className="calc-clear">
          clear
        </div>
        <div onClick={this.calculate} className="calc-eq">
          =
        </div>
      </div>
      <Link to="/">回到主页</Link>
    </div>
  );
}
