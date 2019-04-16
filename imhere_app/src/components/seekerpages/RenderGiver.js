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
          <div class="renderGiverProfile">
            <img 
              id="renderGiverPicture"
              alt={`${giver.name}'s Profile`} src={giver.picture_url}/>
            <div class="renderGiverWords">
                <h2
                  class="renderGiverName"
                >{giver.name}</h2>
                <h3>{giver.skill || `Ask what he/she/they can do!`}</h3>
                <p>{giver.description}</p>
                <Link to={`/seeker/${giverid}/request`}>
                  <button
                    id="requestButton"
                  >Request
                  </button>
                </Link>
            </div>
          </div>
        </div>
      )
    }else{
      return(null);
    }
  }
}
