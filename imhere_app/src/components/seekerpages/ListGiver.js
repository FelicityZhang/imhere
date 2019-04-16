import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './ListGiver.css'

export default class ListGiver extends Component {
  constructor(props){
    super(props)
    this.state = {
      giverListPage: 0
    }
  }
  render() {
    const {givers} = this.props
    const displayGivers = givers.map((giver,index)=>{
      if(index<(this.state.giverListPage*6+6)&&index>=this.state.giverListPage*6){
      return(
        <Link 
          key={giver.id}
          to={`/seeker/${giver.id}`}
        >
          <div class="giverProfile">
            <img 
              id="giverPicture"
              alt={`${giver.name}'s Profile`} src={giver.picture_url}/>
              <div class="giverWords">
                <h2
                  class="giverName"
                >{giver.name}</h2>
                <h3>{giver.skill || `Ask what he/she/they can do!`}</h3>
                <p>{giver.description}</p>
              </div>
          </div>
        </Link>
      )
      }
    })
    return (
      <div id="listGiver">
        <h1
          id="listGiverTitle"
        >Choose a Giver</h1>
        <div id="giverContainer">
          {displayGivers}
        </div>
      </div>
    )
  }
}
