import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./pages/common/Navbar.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import { Router, Route } from 'react-internal-router';
import "./style/stylesheets/index.less";

ReactDOM.render(
  <div>
    <Router>
      <Navbar/>
      <Route path="/" component={HomePage} />
      <Route path="about" component={AboutPage} />
    </Router>
  </div>,
  document.getElementById("root")
);