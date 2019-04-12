import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class ListGiver extends Component {
  render() {
    const {givers} = this.props
    const displayGivers = givers.map((giver,index)=>{
      return(
        <Link 
          key={index}
          to={`/seeker/${giver.id}`}
        >
          <div className="giverprofile">
            <img alt={`${giver.name}'s Profile`} src={giver.picture_url}/>
            <h2>{giver.name}</h2>
            <h3>{giver.skill || `Ask what he/she/they can do!`}</h3>
            <p>{giver.description}</p>
          </div>
        </Link>
      )
    })
    return (
      <div className="allgivers">
      <h1>Choose a Giver</h1>
        {displayGivers}
      </div>
    )
  }
}
