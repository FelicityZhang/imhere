import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import './Landing.css';

class Landing extends Component {
  constructor(props){
    super(props)
    this.state={
      giver: false,
      seeker: false
    }
  }
  render() {
    const {innerWidth,innerHeight} = window;
    const largerDimension = Math.max(innerWidth,innerHeight);
    const defaultSeekerStyle = {
      width: "200px",
      height: "200px",
      left: "30%",
      bottom: "40%",
      zIndex:1
    }
    const selectedSeekerStyle = {
      width: `${largerDimension*2}px`,
      height: `${largerDimension*2}px`,
      left: "-50%",
      bottom: "-50%",
      zIndex:2
    }
    const defaultGiverStyle = {
      width: "200px",
      height: "200px",
      right: "30%",
      bottom: "40%",
      zIndex:1
    }
    const selectedGiverStyle = {
      width: `${largerDimension*2}px`,
      height: `${largerDimension*2}px`,
      right: "-50%",
      bottom: "-50%",
      zIndex:2
    }
    return (
      <div>
        <div id="landingTitle">I'm a...</div>
          <div 
            id="landingSelectSeeker"
            style={this.state.seeker?selectedSeekerStyle:defaultSeekerStyle}
            onClick={e=>{
              this.setState({
                seeker:true
              })
              setTimeout(() => {
                this.props.history.push('/seeker')
              }, 2000);
            }}
            >
          </div>
          <div
            id="landingSeekerWord"
            style={this.state.seeker?
                    {
                      ...defaultSeekerStyle,
                      zIndex:"2",
                      bottom: "45%",
                      left:"20%"
                    }:defaultSeekerStyle}
          >Seeker</div>
          <div 
            id="landingSelectGiver"
            style={this.state.giver?selectedGiverStyle:defaultGiverStyle}
            onClick={e=>{
              this.setState({
                giver:true
              })
              setTimeout(() => {
                this.props.history.push('/giver')
              }, 2000);
            }}
            >
          </div>
          <div
            id="landingGiverWord"
            style={this.state.giver?
                    {
                      ...defaultGiverStyle,
                      zIndex:"2",
                      bottom: "45%",
                      right:"20%"
                    }
                    :
                    defaultGiverStyle}
          >Giver</div>
             
      </div>
    )
  }
}

export default withRouter(Landing);