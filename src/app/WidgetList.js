import React from "react";

import timerIcon from "../images/timer.png";
import calculatorIcon from "../images/calculator.png";
import Widget from "./Widget";

import "../styles/widget-list.less";
const WidgetList = () => (
  <div class="widget-list">
    <Widget name="计算器" icon={calculatorIcon} />
    <Widget name="计时器" icon={timerIcon} />
  </div>
);

export default WidgetList;
