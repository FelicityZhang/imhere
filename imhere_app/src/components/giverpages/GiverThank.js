import React, { Component } from 'react'
import './GiverThank.css'

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
        id="giverThank"
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
        >You have become a giver!</h1>
        <div
          id="giverThankStatus"
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
