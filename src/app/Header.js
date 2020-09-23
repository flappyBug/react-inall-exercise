import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.less";
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">在线计算器</Link>
        </li>
        <li>
          <Link to="/timer">在线倒计时器</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
