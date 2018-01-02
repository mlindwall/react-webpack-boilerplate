import React from 'react';

export default class Searchbar extends React.Component {

  render() {

    return(
      <div className="searchbar">
        <input type="text" placeholder="Search .." className="search-field"/>
      </div>
    )

  }

}