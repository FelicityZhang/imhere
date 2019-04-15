import React, { Component } from 'react'

const url = 'http://localhost/1234'

export default class Request extends Component {
  constructor(props) {
    super(props)
      this.state ={
        title: '',
        start_time: '',
        end_time: '',
        descriptions: ''
      }
  this.handleChangebySetState=this.handleChangebySetState.bind(this);
  }

  handleChangebySetState(event){
       this.setState({
         [event.target.name]: event.target.value
        })
  }

  // getRequest(){
  //   fetch(${url})
  // }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}
            

        
          




      

      
        
