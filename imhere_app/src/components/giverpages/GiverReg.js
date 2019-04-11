import React, { Component } from 'react';

class GiverReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password:'',
      picture:'',
      description:'',
      email: '',
      gender: ''
      // rate:[],
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
    this.props.onSubmit()
    this.setState({
      name:'',
      password:'',
      picture:'',
      description:'',
      email: '',
      gender: '',
      rate:null
    })
      // const fullname = concat(first+" "+last);
      // return fullname;
    }
     

  }

  render() {
    return (
      <div className="giverReg">
        <form>
          <input 
            name='name'
            placeholder='Name'
            value={this.state.name} 
            onChange={event => this.setState({ name: event.target.value})} 
          />

           <br />
          <input 
            name='password'
            placeholder='Password'
            value={this.state.password} 
            onChange={event => this.setState({ password: event.target.value})} 
          />
           <br />
          <input 
            name='picture'
            placeholder='Picture'
            value={this.state.picture} 
            onChange={event => this.setState({ picture: event.target.value})} 
          />
           <br />
          <input 
            name='description'
            placeholder='Description'
            value={this.state.description} 
            onChange={event => this.setState({ description: event.target.value})} 
          />

          <input 
            name='email'
            placeholder='email'
            value={this.state.email} 
            onChange={event => this.setState({ email: event.target.value})} 
          />
          <input 
            name='gender'
            placeholder='gender'
            value={this.state.gender} 
            onChange={event => this.setState({ gender: event.target.value})} 
          />

          <input 
            name='rate'
            placeholder='Rate'
            value={this.state.rate} 
            onChange={event => this.setState({ rate: event.target.value})} 
          />
           <br />
          <button onClick={(event) => this.handleSubmitbyPost(event)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default GiverReg;
