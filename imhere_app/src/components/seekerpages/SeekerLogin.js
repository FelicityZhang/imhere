import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './SeekerLogin.css';
const seeker = require('../../images/seeker.png')


const clickedStyle = {
  top: "25%"
}
const clickedOtherStyle = {
  opacity:"0"
}

class SeekerLogin extends Component {
  constructor(props){
    super(props)
    this.state ={
      chosen:''
    }
  }
  render() {
    return (
      <div id="seekerLogin">
        <div
            id="seekerLoginSeekerWord"
          >Seeker
        </div>
        <img
            id="genSeekerImage"
            src={seeker}
          />
        <div
          id="seekerLoginReg"
          onClick={e=>{
            this.setState({
              chosen:'reg'
            })
            setTimeout(() => {
              this.props.history.push('/seeker/registration')
            }, 500);
          }}
          style={
            (this.state.chosen==='reg')?(
              clickedStyle
            ):((this.state.chosen==='sign')?(
              clickedOtherStyle
            ):(
              null
            ))
          }
        >Create An Account</div>
        <div
          id="seekerLoginSign"
          onClick={e=>{
            this.setState({
              chosen:'sign'
            })
            setTimeout(() => {
              this.props.history.push('/seeker/signin')
            }, 1000);
          }}
          style={
            (this.state.chosen==='sign')?(
              clickedStyle
            ):((this.state.chosen==='reg')?(
              clickedOtherStyle
            ):(
              null
            ))
          }
        >Sign In</div>
      </div>
    )
  }
}
export default withRouter(SeekerLogin);
