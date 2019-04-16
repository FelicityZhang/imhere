import React, { Component } from 'react'

const url = 'http://localhost:1234'

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
    let endPoint = `${ url }/seeker/search/${this.state.skill_description}`
    fetch( endPoint )
      .then( response => response.json() )
      .then( data => {
        this.setState( { givers: data} )
      } )
  }


  render() {
    return (
      <div>
        <div className='searchBar'>
          <form onSubmit={ (e) => this.handleSearchGivers(e) }>
            <input className="input"
              onChange={ event => this.handleChange( event ) }
              value={ this.state.skill_description }
              type="text" />
            <button className="button">Search</button>
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
