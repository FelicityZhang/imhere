import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h2>I'm a...</h2>
        <Link to='/seeker'>
          <div id="selectSeeker">
            Seeker
          </div>
        </Link>
        <Link to='/giver'>Giver</Link>
      </div>
    )
  }
}
