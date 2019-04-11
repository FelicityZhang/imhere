import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class SeekerLogin extends Component {
  render() {
    return (
      <div>
        <Link to='/seeker/registration'>Create An Account</Link>
        <Link to='/seeker/signin'>Sign In</Link>
      </div>
    )
  }
}
