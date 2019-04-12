import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const seekerid= 1;
export default class SeekerSign extends Component {
  render() {
    return (
      <div>
        <Link to={`/seeker/${seekerid}/browse`}>Sign In</Link>
      </div>
    )
  }
}
