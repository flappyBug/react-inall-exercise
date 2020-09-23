import React from "react";
import "../styles/widget.less";

const WidgetIcon = ({ name, icon }) => (
  <div className="widget">
    <img src={icon} alt={name} />
    <p>{name}</p>
  </div>
);
export default WidgetIcon;
