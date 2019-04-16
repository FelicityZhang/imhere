import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './RenderGiver.css'
export default class RenderGiver extends Component {
  render() {
    const {giverid} = this.props.match.params
    const giver = this.props.givers.find(searchedGiver=>searchedGiver.id==giverid)
    if(giver){
      return (
        <div id="renderGiver">
          <div className="renderGiverProfile">
            <img 
              id="renderGiverPicture"
              alt={`${giver.name}'s Profile`} src={giver.picture_url}/>
            <div className="renderGiverWords">
            
                <h2
                  className="renderGiverName"
                >{giver.name}</h2>
                <Link to={`/seeker/${giverid}/request`}>
                  <button
                    id="requestButton"
                  >Request
                  </button>
                </Link>
                <h3>{giver.skill || `Ask what he/she/they can do!`}</h3>
                <p>{giver.description}</p>
            </div>
          </div>
        </div>
      )
    }else{
      return(null);
    }
  }
}
