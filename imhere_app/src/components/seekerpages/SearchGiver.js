import React, { Component } from 'react'

const url = 'http://localhost/1234'

export default class SearchGiver extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      skill: '',
      givers: ''
    }
    this.handleSearchGivers = this.handleSearchGivers.bind( this )
    this.handleChange = this.handleChange.bind( this )
  }

  handleChange( event ) {
    this.setState( {
      skill: event.target.value
    } )
  }

  handleSearchGivers() {
    let endPoint = `${ url }/seeker/browse`
    fetch( endPoint )
      .then( response => response.json() )
      .then( data => {
        this.setState( { givers: data.filter( giver => giver.description = this.state.skill ) } )
      } )
  }

  render() {
    return (
      <div>
        <div className='searchBar'>
          <form onSubmit={ this.handleSearchGivers }>
            <input className="input"
              onChange={ event => this.handleChange( event ) }
              value={ this.state.skill }
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
