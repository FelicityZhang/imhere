import React, { Component } from 'react'
import './SearchGiver.css'

const url = 'http://localhost:1234'
// const url ='https://imhereapp.herokuapp.com'

export default class SearchGiver extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      skill_description: '',
      givers: ''
    }
    this.handleSearchGivers = this.handleSearchGivers.bind( this )
    this.handleChange = this.handleChange.bind( this )
  }

  handleChange( event ) {
    this.setState( {
      skill_description: event.target.value
    } )
  }


  handleSearchGivers(e) {
    e.preventDefault()
    this.props.handleSearch(this.state.skill_description)
  }


  render() {
    return (
      <div>
        <div id='searchGiverBar'>
          <form onSubmit={ (e) => this.handleSearchGivers(e) }>
            <input className="input"
              onChange={ event => this.handleChange( event ) }
              placeholder="Search Your Giver by Skill"
              value={ this.state.skill_description }
              type="text" />
            <button id="searchGiverSubmit">Search</button>
          </form>
        </div>
        <div className="giverContainer">
          {/* {
            this.state.data &&  this.handleGivers() 
          } */}
        </div>

      </div>
    )
  }
}
