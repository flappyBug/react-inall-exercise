import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Timer extends Component {
  state = {
    started: false,
    finished: false,
    remain: 0,
    timer: null,
  };

  startTimer = (event) => {
    event.preventDefault();
    const timer = setInterval(() => {
      if (this.state.remain <= 1) {
        this.setState({
          finished: true,
        });
        clearInterval(timer);
      } else {
        this.setState({
          remain: this.state.remain - 1,
        });
      }
    }, 1000);
    this.setState({
      started: true,
      timer,
      remain: this.state.time,
    });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.timer);
  };

  render = () => (
    <div className="page">
      <h1>在线倒计时器</h1>
      <div className="panel-set">
        <label htmlFor="time">
          设置时间
          <input
            disabled={this.state.started}
            id="time"
            type="number"
            min="1"
            onChange={(event) => this.setState({ time: event.target.value })}
          />
        </label>
        <button disabled={this.state.started} onClick={this.startTimer}>
          Start
        </button>
      </div>
      <div className="panel-display">
        {this.state.started
          ? this.state.finished
            ? "End"
            : this.state.remain
          : "Start"}
      </div>
      <Link to="/">回到主页</Link>
    </div>
  );
}
