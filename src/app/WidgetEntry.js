import React from "react";
import { Link } from "react-router-dom";
import "../styles/widget-entry.less";

const WidgetEntry = ({ name, icon, path }) => (
  <div className="widget-entry">
    <Link to={path}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </Link>
  </div>
);
export default WidgetEntry;
