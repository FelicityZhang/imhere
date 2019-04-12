import React, { Component } from 'react';

class SeekerReg extends Component {
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
    this.props.postSeeker(data);
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
    this.props.history.push('/seeker/browse')
  }

  render(){
    return (
      <div className="giverReg">
        <h1>Start Looking!</h1>
        <form>
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
            onClick={(event) => this.handleSubmitbyPost(event)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SeekerReg;
