import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h2>I'm a...</h2>
        <Link to='/seeker'>Seeker</Link>
        <Link to='/seeker'>Giver</Link>
      </div>
    )
  }
}
