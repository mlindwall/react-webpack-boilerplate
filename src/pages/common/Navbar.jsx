import React from 'react';
import Searchbar from "./Searchbar.jsx";
import { Link } from "react-internal-router";

export default class Navbar extends React.Component {

  render() {

    return(
      <div className="navbar">
        <div className="navbar--logo">
          Boilerplate
        </div>
        <div className="navbar--links">
          <Searchbar />
          <Link to="/"><span className="navbar--link">Home</span></Link>
          <Link to="/about"><span className="navbar--link">About</span></Link>
        </div>
      </div>
    )

  }

}