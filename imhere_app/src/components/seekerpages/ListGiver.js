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
    let givers;
    let display;
    console.log(this.props.keyword + this.props.searched.length)
    if(this.props.keyword && this.props.searched.length){
      givers = this.props.searched
      display = `Givers who know... ${this.props.keyword}`
    }else if(this.props.keyword){
      display = ` All Givers (Sorry, no results for ${this.props.keyword})`
      givers = this.props.givers
    }else{
      display = 'All Givers'
      givers = this.props.givers
    }   
    const displayGivers = givers.map((giver,index)=>{
      if(index<(this.state.giverListPage*4+4)&&index>=this.state.giverListPage*4){
      return(
        <Link 
          key={giver.id}
          to={`/seeker/${giver.id}`}
        >
          <div className="giverProfile">
            <img 
              id="giverPicture"
              alt={`${giver.name}'s Profile`} src={giver.picture_url}/>
              <div className="giverWords">
                <h2
                  className="giverName"
                >{giver.name}</h2>
                <h3>{giver.skill || `Ask what he/she/they can do!`}</h3>
                <p id="listGiverDescription">{giver.description.slice(0,150)}...</p>
              </div>
          </div>
        </Link>
      )
      }
    })
    const max = Math.ceil(givers.length/4);
    return (
      <div id="listGiver">
        <h1
          id="listGiverTitle"
        >{display}</h1>
        <div id="giverContainer">
          {displayGivers}
        </div>
        <div
          id="pageCount"
        >Page {this.state.giverListPage+1} of {max}</div>
        {(this.state.giverListPage+1)<max?(
              <button
                className="listGiverPageChangeButton"
                id="listNextButton"
                onClick={(e)=>{
                  this.setState(prevState=>{return {giverListPage:prevState.giverListPage+1}})
                }}
              >Next Page</button>):(
                null
              )}

        {this.state.giverListPage?(
              <button
                class="listGiverPageChangeButton"
                id="listPrevButton"
                onClick={(e)=>{
                  this.setState(prevState=>{return {giverListPage:prevState.giverListPage-1}})
                }}
              >Previous Page</button>):(
                null
              )}
      </div>
    )
  }
}
