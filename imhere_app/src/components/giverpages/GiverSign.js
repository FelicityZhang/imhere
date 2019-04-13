import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import './GiverSign.css';

class GiverSign extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      email: '',
      password: '',
      vpassword:'',
      clicked:false
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
    // this.props.giverSign( data )
    this.setState( {
      email: '',
      password: ''
    } )
    if(true){
      this.setState({
        clicked:true
      })
      setTimeout(()=>{
        this.props.history.push('/giver/status')
      },1200)
    }
  }
  render() {
    return (
      <div id='giverSign'>
        <div
            id="giverSignGiverWord"
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
          >Giver
        </div>
        <div
            id="giverSignSign"
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
          >Sign In</div>
        <form
            id="giverSignForm"
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
          >
          <input
            name='email'
            placeholder='Email'
            value={ this.state.email }
            onChange={ this.handleGiverSignInfo }
          />
          <br />
          <input
            name='password'
            placeholder='Password'
            type="password"
            value={ this.state.password }
            onChange={ this.handleGiverSignInfo }
          />
          <input
            name='vpassword'
            placeholder='Retype Password'
            type="password"
            value={ this.state.vpassword }
            onChange={ this.handleGiverSignInfo }
          />
          <br />
          <button
            id="giverSignSubmit"
            onClick={ ( event ) => this.handleGiverSignSubmit( event ) }>
            Enter
          </button>
        </form>
      </div>
    )
  }
}
export default withRouter(GiverSign);