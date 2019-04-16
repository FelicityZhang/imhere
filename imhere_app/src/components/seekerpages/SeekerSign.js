import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import './SeekerSign.css';


class SeekerSign extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      email: '',
      password: '',
      vpassword: ''
    }
    this.handleSeekerSignInfo = this.handleSeekerSignInfo.bind( this );
    this.handleSeekerSignSubmit = this.handleSeekerSignSubmit.bind( this );

  }

  handleSeekerSignInfo( event ) {
    this.setState( {
      [ event.target.name ]: event.target.value
    } )
  }

  async handleGiverSignSubmit( event ) {
    event.preventDefault();
    const { email, password } = this.state;
    const data = { email, password }
    const result = await this.props.handleLogin( data )
    this.setState( {
      email: '',
      password: ''
    } )
    if(result){
      this.setState({
        clicked:true
      })
      setTimeout(()=>{
        this.props.history.push('/seeker/browse')
      },1200)
    }else{
      this.setState(
        {errorMessage:"Wrong Credentials"}
        )
    }
  }

  render() {
    return (
      <div id='seekerSign'>
        <div
            id="seekerSignSeekerWord"
            style={
              this.state.clicked?(
                {
                  left:"-20%",
                  opacity:"0"
                }
              ):(
                {left:"30%"}
              )
            }
          >Seeker
        </div>
        <div
            id="seekerSignSign"
            style={
              this.state.clicked?(
                {
                  right:"-20%",
                  opacity:"0"
                }
              ):(
                {right:"30%"}
              )
            }
          >Sign In</div>
        <form
            id="seekerSignForm"
            style={
              this.state.clicked?(
                {
                  right:"-20%",
                  opacity:"0"
                }
              ):(
                {right:"30%"}
              )
            }
          >
          <input
            name='email'
            placeholder='Email'
            value={ this.state.email }
            onChange={ this.handleSeekerSignInfo }
          />
          <br />
          <input
            name='password'
            placeholder='Password'
            type="password"
            value={ this.state.password }
            onChange={ this.handleSeekerSignInfo }
          />
          <br />
          <input
            name='vpassword'
            placeholder='Retype Password'
            type="password"
            value={ this.state.vpassword }
            onChange={ this.handleSeekerSignInfo }
          />
          <br />
          <button
            id="seekerSignSubmit"
            onClick={ ( event ) => this.handleSeekerSignSubmit( event ) }>
            Enter
          </button>
        </form>
      </div>
    )
  }


}
export default SeekerSign;
