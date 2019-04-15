import React, { Component } from 'react'
// import './SeekerThank.css'

export default class SeekerThank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:false
    }
  }
  render() {
    return (
      <div
        id="seekerThank"
      >
        <h1
          id="seekerThankMessage"
          style={
            this.state.clicked?(
              {
                opacity:"0"
              }
            ):(
              null
            )
          }
        >Thank you for registering as a Seeker!</h1>
        <div
          id="thankStatus"
          style={
            this.state.clicked?(
              {
                opacity:"0"
              }
            ):(
              null
            )
          }
          onClick={()=>{
            this.setState({
              clicked:true
            })
            setTimeout(()=>{
              this.props.history.push('/giver/status')
            },1200);
          }}
        >
        Check my status
        </div>
      </div>
    )
  }
}
