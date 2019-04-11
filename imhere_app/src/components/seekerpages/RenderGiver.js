import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const seekerid=1;
const giverid=1;

export default class RenderGiver extends Component {
  render() {
    return (
      <div>
        <Link to={`/seeker/${seekerid}/search/${giverid}/request`}>Request</Link>
      </div>
    )
  }
}
