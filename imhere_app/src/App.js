import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import Landing from './components/Landing';
import Live from './components/livechat/Live';
import GiverLogin from './components/giverpages/GiverLogin';
import GiverReg from './components/giverpages/GiverReg';
import GiverSign from './components/giverpages/GiverSign';
import GiverStatus from './components/giverpages/GiverStatus';
import GiverThank from './components/giverpages/GiverThank';
import ListGiver from './components/seekerpages/ListGiver';
import SearchGiver from './components/seekerpages/SearchGiver';
import RenderGiver from './components/seekerpages/RenderGiver';
import SeekerLogin from './components/seekerpages/SeekerLogin';
import SeekerReg from './components/seekerpages/SeekerReg';
import SeekerSign from './components/seekerpages/SeekerSign';
import Request from './components/seekerpages/Request';
import SeekerStatus from './components/seekerpages/SeekerStatus';
import SeekerThank from './components/seekerpages/SeekerThank';
import{
  seekerRegister,
  giverRegister,
  seekerLogin,
  giverLogin
} from './services/api-helper'

import './App.css';
const users = [
  {
    id: 1,
    name: 'Brandon P',
    password_digest: 123,
    picture_url: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'brandonp@gmail.com'
  },
  {
    id: 2,
    name: 'Wendy A',
    password_digest: 234,
    picture_url: 'https://randomuser.me/api/portraits/women/1.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'wendya@gmail.com'
  },
  {
    id: 3,
    name: 'Ellen B',
    password_digest: 345,
    picture_url: 'https://randomuser.me/api/portraits/women/2.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'ellenb@gmail.com'
  },
  {
    id: 4,
    name: 'Ken Q',
    password_digest: 456,
    picture_url: 'https://randomuser.me/api/portraits/men/2.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'kenq@gmail.com'
  }
]
const requests =[{
    giver_id: 1,
    seeker_id: 1,
    approval: 0,
    title: 'Mounting needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need someone to mount my TV.'
  },
  {
    giver_id: 2,
    seeker_id: 2,
    approval: 0,
    title: 'Painting needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need someone to paint my apartment.'
  },
  {
    giver_id: 3,
    seeker_id: 1,
    approval: 0,
    title: 'Moving needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need someone to assist me to move.'
  },
  {
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Deep clean needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need someone to clean my bathroom.'
  },
  {
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Plumbing needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need a plumber asap.'
  },
  {
    giver_id: 6,
    seeker_id: 1,
    approval: 0,
    title: 'Electrical needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need a electrical technicial.'
  },
  {
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Packing & unpacking needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need someone to pack my clothings.'
  },
  {
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Organization needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need someone to organize my stuff.'
  },
  {
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Plumbing needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need a plumber asap.'
  },
  {
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Deep clean needed',
    start_time: "0900",
    end_time: "1100",
    description: 'I need someone to clean up my bedroom.'
  }
];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: '',
    }
    this.handleSeekerLogin = this.handleSeekerLogin.bind( this )
    this.handleGiverLogin = this.handleGiverLogin.bind( this )
    this.handleSeekerRegister = this.handleSeekerRegister.bind( this )
    this.handleGiverRegister = this.handleGiverRegister.bind( this )
    this.authHandleChange = this.authHandleChange.bind( this )
  }
  postGiver(data){
    console.log("posting giver")
    console.log(data)
    return true;
  }

  postSeeker(data){
    console.log("posting seeker")
    console.log(data)
    return true;
  }

  // handleSeekerLoginButton() {
  //   this.props.history.push( "/seeker" )
  // }

  // handleGiverLoginButton() {
  //   this.props.history.push( "/giver" )
  // }


  async handleSeekerLogin(data) {
    const userData = await seekerLogin(data);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }

  async handleGiverLogin(data) {
    const userData = await giverLogin(data);
    console.log(userData)
    // if(userData.status==401){
    //   return false;
    // }
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }

  async handleSeekerRegister(data) {
    await seekerRegister( data );
    this.handleSeekerLogin( data );
  }

  async handleGiverRegister(data) {
    await giverRegister( data );
    this.handleGiverLogin(data);
  }

  authHandleChange( e ) {
    const { email, value } = e.target;
    this.setState( prevState => ( {
      authFormData: {
        ...prevState.authFormData,
        [ email ]: value
      }
    } ) );
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={ ( props ) => <Landing { ...props } /> } />

          {/*Seekers*/ }
          <Route 
          exact path='/seeker' 
          render={ ( props ) => < SeekerLogin {...props}/>}/>
          <Route path='/seeker/registration'render={ ( props ) => (
            <SeekerReg 
             { ...props } 
             postSeeker={this.postSeeker}
             handleReg={ this.handleSeekerRegisters}
             handleChange={ this.authHandleChange }
             formData={ this.state.authFormData } />)} />
          <Route
            path='/seeker/signin'
            render={ ( props ) => (
              <SeekerSign 
              { ...props }
              handleLogin={ this.handleSeekerLogin }
              handleChange={ this.authHandleChange }
              formData={ this.state.authFormData } />)} />
          <Route
            path='/seeker/browse'
            render={ ( props ) => <ListGiver { ...props } givers={users}/> } />
          <Route
            exact path='/seeker/search'
            render={ ( props ) => <SearchGiver { ...props } /> } />
          <Route
            exact path='/seeker/:giverid'
            render={ ( props ) => <RenderGiver { ...props } givers={users}/> } />
          <Route
            path='/seeker/:giverid/request'
            render={ ( props ) => <Request { ...props } /> } />
          <Route
            path='/seeker/status'
            render={ ( props ) => <SeekerStatus { ...props } /> } />
          <Route
            path='/seeker/complete'
            render={ ( props ) => <SeekerThank { ...props } /> } />

          {/*Giver*/ }
          <Route 
            exact path='/giver'
            render={ ( props ) => <GiverLogin {...props} /> } />
          <Route path='/giver/registration'render={ ( props ) => (
              <GiverReg 
              { ...props }
              handleReg={ this.handleGiverRegister}
              handleChange={ this.authHandleChange }
              formData={ this.state.authFormData } />)} />
          <Route
            path='/giver/signin'
            render={ ( props ) => (
             <GiverSign
              { ...props }
              handleLogin={ this.handleGiverLogin }
              handleChange={ this.authHandleChange }
              formData={ this.state.authFormData } />)} />             <Route
            path='/giver/complete'
            render={ ( props ) => <GiverThank { ...props } /> } />
          <Route
            path='/giver/status'
            render={ ( props ) => <GiverStatus { ...props} requests={requests} /> } />
        </Switch>
      </div>
    );
  }
}

export default App
