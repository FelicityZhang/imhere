import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import './GiverReg.css'

class GiverReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first:'',
      last:'',
      password:'',
      picture:'',
      description:'',
      email: '',
      gender: '',
      rate:'',
      clicked:false
    }
    this.handleChangebySetState=this.handleChangebySetState.bind(this);
    this.handleSubmitbyPost=this.handleSubmitbyPost.bind(this);
  }

  handleChangebySetState = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmitbyPost = (event) => {
    event.preventDefault();
    const {first, last, password, picture, description, email, gender, rate} = this.state;
    const name = first.concat(" ",last);
    const data = { name, password, picture, description, email, gender, rate };
    const success = this.props.handleReg(data);
    this.setState({
      first:'',
      last:'',
      password:'',
      picture:'',
      description:'',
      email: '',
      gender: '',
      rate: ''
    })
    if(success){
      this.setState({
        clicked:true
      })
      setTimeout(()=>{
        this.props.history.push('/giver/complete')
      },1200);
    }
  }

  render(){
    return (
      <div id="giverReg">
        <div
            id="giverRegGiverWord"
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
            id="giverRegReg"
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
          >Create An Account</div>
          <form
            id="giverRegForm"
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
              name='first'
              placeholder='First Name'
              value={this.state.first} 
              onChange={this.handleChangebySetState} 
            />
            <br />
            <input 
              name='last'
              placeholder='Last Name'
              value={this.state.last} 
              onChange={this.handleChangebySetState} 
            />
            <br />
            <input 
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password} 
              onChange={this.handleChangebySetState} 
            />
            <br />
            <input 
              name='picture'
              placeholder='Picture'
              value={this.state.picture} 
              onChange={this.handleChangebySetState} 
            />
            <br />
            <input 
              name='description'
              placeholder='Description'
              value={this.state.description} 
              onChange={this.handleChangebySetState} 
            />
            <br />
            <input 
              name='email'
              placeholder='Email'
              value={this.state.email} 
              onChange={this.handleChangebySetState} 
            />
            <br />
            <input 
              name='gender'
              placeholder='Gender'
              value={this.state.gender} 
              onChange={this.handleChangebySetState} 
            />
            <br />
            <input 
              name='rate'
              placeholder='Rate'
              value={this.state.rate} 
              onChange={this.handleChangebySetState} 
            />
            <br />
            <button
              id="giverRegSubmit"
              onClick={(event) => this.handleSubmitbyPost(event)}>
              Become a Giver!
            </button>
          </form>
      </div>
    );
  }
}
export default withRouter(GiverReg);
