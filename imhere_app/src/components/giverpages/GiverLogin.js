import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class GiverLogin extends Component {
  render() {
    return (
      <div>
        <Link to='/giver/registration'>Create An Account</Link>
        <Link to='/giver/signin'>Sign In</Link>
      </div>
    )
  }
}
