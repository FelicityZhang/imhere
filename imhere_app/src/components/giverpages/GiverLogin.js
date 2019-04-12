import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class GiverLogin extends Component {
  render() {
    return (
      <div>
        <div
          id="reg"
        >Create An Account</div>
        <div
          id="sign"
        >Sign In</div>
        <Link to='/giver/registration'>Create An Account</Link>
        <Link to='/giver/signin'>Sign In</Link>
      </div>
    )
  }
}
export default withRouter(GiverLogin);
