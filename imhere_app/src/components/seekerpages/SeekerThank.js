import React, { Component } from 'react'
import './SeekerThank.css'

export default class GiverThank extends Component {
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
          id="giverThankMessage"
          style={
            this.state.clicked?(
              {
                opacity:"0"
              }
            ):(
              null
            )
          }
        >You have become a Seeker!</h1>
        <div
          id="seekerThankStatus"
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
              this.props.history.push('/seeker/status')
            },1200);
          }}
        >
        Check my status
        </div>
      </div>
    )
  }
}
