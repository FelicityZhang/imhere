import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const seekerid= 1;
class SeekerSign extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      email: '',
      password: ''
    }
    this.handleSeekerSignInfo = this.handleSeekerSignInfo.bind( this );
    this.handleSeekerSignSubmit = this.handleSeekerSignSubmit.bind( this );

  }

  handleSeekerSignInfo( event ) {
    this.setState( {
      [ event.target.name ]: event.target.value
    } )
  }

  handleSeekerSignSubmit( event ) {
    event.preventDefault();
    const { email, password } = this.state;
    const data = { email, password }
    this.props.seekerSign( data )
    this.setState( {
      email: '',
      password: ''
    } )
  }

  render() {
    return (
      <div className='seekerSign'>
        <h1>Sign</h1>
        <form>
          <input
            name='email'
            placeholder='email'
            value={ this.state.email }
            onChange={ this.handleSeekerSignInfo }
          />
          <br />
          <input
            name='password'
            placeholder='password'
            value={ this.state.password }
            onChange={ this.handleSeekerSignInfo }
          />
          <br />
          <button
            onClick={ ( event ) => this.handleSeekerSignSubmit( event ) }>
            Submit
          </button>
        </form>
        <Link to={`/seeker/${seekerid}/browse`}>Sign In</Link>
      </div>
    )
  }


}
export default SeekerSign;
