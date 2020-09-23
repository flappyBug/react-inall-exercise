import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/timer.less";
export default class Timer extends Component {
  state = {
    started: false,
    finished: false,
    remain: 0,
    timer: null,
    time: 0,
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
    <div className="page timer">
      <h1>在线倒计时器</h1>

      <div>
        <div className="panel-set">
          <label htmlFor="time">
            设置时间
            <input
              disabled={this.state.started}
              id="time"
              type="number"
              min="1"
              value={this.state.time}
              onChange={(event) => this.setState({ time: event.target.value })}
            />
          </label>
          <button
            disabled={this.state.started || this.state.time <= 0}
            onClick={this.startTimer}
          >
            Start
          </button>
        </div>
        <div className="panel-display">
          {this.state.started
            ? this.state.finished
              ? "End"
              : `${this.state.remain} Seconds`
            : "Start"}
        </div>
      </div>
      <Link to="/">回到主页</Link>
    </div>
  );
}
