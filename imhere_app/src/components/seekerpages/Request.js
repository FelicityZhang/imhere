import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

// const url = 'http://localhost:1234'
const url ='https://imhereapp.herokuapp.com'

// /seeker/:giverid/request

class Request extends Component {
  constructor(props) {
    super(props)
      this.state ={
        title: '',
        start_time: '',
        end_time: '',
        description: ''
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
      description: this.state.description,
      seeker_id: this.props.seeker_id,
      giver_id: parseInt(this.props.match.params.giverid)
    }
    console.log(data);
  await fetch(`${url}/seeker/request`,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type' : 'application/json'
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
    const {giverid} = this.props.match.params
    const giver = this.props.givers.find(searchedGiver=>searchedGiver.id==giverid)
    return (
      <div>
        <div id="renderGiver">
          <div class="renderGiverProfile">
            <img 
              id="renderGiverPicture"
              alt={`${giver.name}'s Profile`} src={giver.picture_url}/>
            <div
              id="formWords"
            >
              <div>{giver.name} is here to help<br/>
              Please give us a few more details about your project, this is so your Giver can best assist you.</div>
              <form 
                id="requestForm"
                onSubmit={this.handleRequestSubtmit}
              >
                  <br/>
                <input 
                  name='start_time'
                  type='datetime-local'
                  placeholder='Preferred Arrival Time'
                  value={this.state.picture} 
                  onChange={this.handleChangebySetState} 
                />
                  <br/>
                <input 
                  name='end_time'
                  type='datetime-local'
                  placeholder='Estimated Departure Time'
                  value={this.state.picture} 
                  onChange={this.handleChangebySetState} 
                />
                  <br/>
                <input 
                  name='title'
                  placeholder="What's your task?"
                  value={this.state.picture} 
                  onChange={this.handleChangebySetState} 
                />
                <input 
                  name='description'
                  placeholder='Additional Details'
                  value={this.state.picture} 
                  onChange={this.handleChangebySetState} 
                />
                  <br/>
                  <button type="submit" id="submitRequest">Submit</button>
                  </form>
              </div>  
            </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Request); 

        
          




      

      
        
