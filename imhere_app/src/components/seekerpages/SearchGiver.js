import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './SearchGiver.css'

// const url = 'http://localhost:1234'
const url ='https://imhereapp.herokuapp.com'

class SearchGiver extends Component {
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
    this.props.history.push('/seeker/browse');
  }


  render() {
    return (
      <div
        >
        <div 
          className={this.props.history.location.pathname === '/'||
          this.props.history.location.pathname==='/seeker'||
          this.props.history.location.pathname.includes("giver")||
          this.props.history.location.pathname.includes("signin")||
          this.props.history.location.pathname.includes("registration")?"noDisplaySearch":"displaySearch"}
          id='searchGiverBar'
        >
          <form onSubmit={ (e) => this.handleSearchGivers(e) }>
            <input id="searchGiverInput"
              onChange={ event => this.handleChange( event ) }
              placeholder="Search Your Giver by Skill"
              value={ this.state.skill_description }
              type="text" />
            <button id="searchGiverSubmit">Search</button>
          </form>
        </div>
      </div>
    )
  }
}
export default withRouter(SearchGiver);