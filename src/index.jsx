import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./pages/common/Navbar.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import "./style/stylesheets/_index.scss";

ReactDOM.render(
  <div>
    <Navbar/>
    <HomePage />
  </div>,
  document.getElementById("root")
);