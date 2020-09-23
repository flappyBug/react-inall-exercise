import React from "react";

import timerIcon from "../images/timer.png";
import calculatorIcon from "../images/calculator.png";
import WidgetEntry from "./WidgetEntry";

import "../styles/widget-list.less";
const WidgetList = () => (
  <div className="widget-list">
    <WidgetEntry name="计算器" icon={calculatorIcon} path="/calculator" />
    <WidgetEntry name="计时器" icon={timerIcon} path="/timer" />
  </div>
);

export default WidgetList;
