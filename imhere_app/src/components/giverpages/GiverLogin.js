import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './GiverLogin.css';
const giver = require('../../images/giver.png')

const clickedStyle = {
  top: "25%"
}
const clickedOtherStyle = {
  opacity:"0"
}

class GiverLogin extends Component {
  constructor(props){
    super(props)
    this.state ={
      chosen:''
    }
  }
  render() {
    return (
      <div id="giverLogin">
        <div
            id="giverLoginGiverWord"
          >Giver
        </div>
        <img
            id="genGiverImage"
            src={giver}
          />
        <div
          id="giverLoginReg"
          onClick={e=>{
            this.setState({
              chosen:'reg'
            })
            setTimeout(() => {
              this.props.history.push('/giver/registration')
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
          id="giverLoginSign"
          onClick={e=>{
            this.setState({
              chosen:'sign'
            })
            setTimeout(() => {
              this.props.history.push('/giver/signin')
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
export default withRouter(GiverLogin);
