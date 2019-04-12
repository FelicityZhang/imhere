import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class RenderGiver extends Component {
  render() {
    const {giverid} = this.props.match.params
    const giver = this.props.givers.find(searchedGiver=>searchedGiver.id==giverid)
    return (
      <div>
        <div className="giverprofile">
          <img alt={`${giver.name}'s Profile`} src={giver.picture_url}/>
          <h2>{giver.name}</h2>
          <h3>{giver.skill || `Ask what he/she/they can do!`}</h3>
          <p>{giver.description}</p>
        </div>
        <Link to={`/seeker/${giverid}/request`}>Request</Link>
      </div>
    )
  }
}
