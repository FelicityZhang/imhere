import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class GiverSign extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      email: '',
      password: ''
    }
    this.handleGiverSignInfo = this.handleGiverSignInfo.bind( this );
    this.handleGiverSignSubmit = this.handleGiverSignSubmit.bind( this );

  }

  handleGiverSignInfo( event ) {
    this.setState( {
      [ event.target.name ]: event.target.value
    } )
  }

  handleGiverSignSubmit( event ) {
    event.preventDefault();
    const { email, password } = this.state;
    const data = { email, password }
    this.props.giverSign( data )
    this.setState( {
      email: '',
      password: ''
    } )
  }



  render() {
    return (
      <div className='giverSign'>
        <h1>Sign</h1>
        <form>
          <input
            name='email'
            placeholder='email'
            value={ this.state.email }
            onChange={ this.handleGiverSignInfo }
          />
          <br />
          <input
            name='password'
            placeholder='password'
            value={ this.state.password }
            onChange={ this.handleGiverSignInfo }
          />
          <br />
          <button
            onClick={ ( event ) => this.handleGiverSignSubmit( event ) }>
            Submit
          </button>
        </form>
        <Link to='/giver/'>Sign In</Link>
      </div>
    )
  }


}
export default GiverSign;
