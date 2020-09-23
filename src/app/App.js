import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import "../styles/app.less";
import Calculator from "./Calculator";
import Timer from "./Timer";
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/timer" component={Timer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
