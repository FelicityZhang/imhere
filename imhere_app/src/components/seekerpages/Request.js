import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

const url = 'http://localhost/1234'

// /seeker/:giverid/request

class Request extends Component {
  constructor(props) {
    super(props)
      this.state ={
        title: '',
        start_time: '',
        end_time: '',
        descriptions: ''
      }
  this.handleChangebySetState=this.handleChangebySetState.bind(this);
  this.handleRequestSubtmit=this.handleRequestSubtmit.bind(this);
  }

  handleChangebySetState(event){
       this.setState({
         [event.target.name]: event.target.value
        })
  }

  // getRequest(){
  //   fetch(${url})
  // }

handleRequestSubtmit = async event =>{
  event.preventDefault()
  setTimeout(()=>{
    this.props.history.push('/seeker/status')
  }, 1200)
  let data = {
      title: this.state.title,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      descriptions: this.state.description
    }
 await fetch(`${url}/seeker/1/request`,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type' : 'apllication/json'
    }
  }).then(response =>{
    return response.json()
  })

  this.setState({
    title:'',
    start_time: '',
    end_time: '',
    descriptions: ''
  })

  
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleRequestSubtmit}>
        <h4>Congratulations, ImHere is here to help you. Please give us a few more details about your project? This is so your Giver can best assist you.
        </h4>
        
          <input 
            name='title'
            placeholder='Describe your task'
            value={this.state.picture} 
            onChange={this.handleChangebySetState} 
          />
            <br/>
          <input 
            name='start_time'
            placeholder='Preferred Arrival Time'
            value={this.state.picture} 
            onChange={this.handleChangebySetState} 
          />
            <br/>
          <input 
            name='end_time'
            placeholder='Estimated Departure Time'
            value={this.state.picture} 
            onChange={this.handleChangebySetState} 
          />
            <br/>
          <input 
            name='description'
            placeholder='Additional Details'
            value={this.state.picture} 
            onChange={this.handleChangebySetState} 
          />
            <br/>
            <button type="submit" classname="submitButton">Request</button>
            </form>
      </div>
    )
  }
}
export default withRouter(Request); 

        
          




      

      
        
