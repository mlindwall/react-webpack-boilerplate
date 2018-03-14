import React from 'react';
import { Link } from 'react-internal-router';

export default class AboutPage extends React.Component {

  render() {

    return(
      <div>
        About Page ..
        <Link to="/">Home</Link>
      </div>
    )

  }

}