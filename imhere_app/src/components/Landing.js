import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './Landing.css';

const logo = require('../images/logo.gif');
const giver = require('../images/giver.png')
const seeker = require('../images/seeker.png')
const nyc = require('../images/nyc.png');

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
      left: "35%",
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
      right: "35%",
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
          <img
            id="mainlogo"
            src={logo}
          />

          <img
            id="giverImage"
            style={this.state.giver?
              {
                zIndex:"3"
              }
              :
              null}
            src={giver}
          />

          <img
            id="seekerImage"
            style={this.state.seeker?
              {
                zIndex:"3"
              }
              :
              null}
            src={seeker}
          />

          <img
            id="backgroundNyc"
            src={nyc}
          />
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
            id="seekerDescription"
          >Who's here for me?</div>
          <div
            id="landingSeekerWord"
            style={this.state.seeker?
                    {
                      ...defaultSeekerStyle,
                      zIndex:"2",
                      bottom: "45%",
                      left:"30%"
                    }:defaultSeekerStyle}
          >Seeker</div>
          <div
            id="giverDescription"
          >Who am I here for?</div>
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
                      right:"30%"
                    }
                    :
                    defaultGiverStyle}
          >Giver</div>
             
      </div>
    )
  }
}

export default withRouter(Landing);