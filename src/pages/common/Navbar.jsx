import React from 'react';
import Searchbar from "./Searchbar.jsx";

export default class Navbar extends React.Component {

  render() {

    return(
      <div className="navbar">
        <div className="navbar--logo">
          Boilerplate
        </div>
        <div className="navbar--links">
          <Searchbar />
          <span className="navbar--link">Home</span>
          <span className="navbar--link">About</span>
        </div>
      </div>
    )

  }

}