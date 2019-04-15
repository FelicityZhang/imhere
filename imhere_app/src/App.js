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
  users,
  requests
} from './Data';
import{
  seekerRegister,
  giverRegister,
  seekerLogin,
  giverLogin
} from './services/api-helper'

import './App.css';

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
  }

  async handleSeekerLogin(data) {
    const userData = await seekerLogin(data);
    this.setState({
      currentUser: decode(userData.token, { header: true })
    })
    localStorage.setItem("jwt", userData.token)
  }

  async handleGiverLogin(data) {
    console.log(data)
    const userData = await giverLogin(data);
    console.log(userData)
    if(userData.status==401){
      return false;
    }else{
      this.setState({
        currentUser: decode(userData.jwt, { header: true })
      })
      localStorage.setItem("jwt", userData.token)
      return true;
    }
  }

  async handleSeekerRegister(data) {
    const userData = await seekerRegister( data );
    this.setState({
      currentUser: decode(userData.jwt, { header: true })
    })
  }

  async handleGiverRegister(data) {
    const userData = await giverRegister( data );
    this.setState({
      currentUser: decode(userData.jwt, { header: true })
    })
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
          <Route 
            path='/seeker/registration'
            render={ ( props ) => (
              <SeekerReg 
                { ...props } 
                handleReg={ this.handleSeekerRegisters}
              />)}
          />
          <Route
            path='/seeker/signin'
            render={ ( props ) => (
              <SeekerSign 
                { ...props }
                handleLogin={ this.handleSeekerLogin }
              />)}
          />
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
            render={ ( props ) => <GiverLogin {...props} /> }  
          />
          <Route
            path='/giver/registration'
            render={ ( props ) => (
              <GiverReg 
                { ...props }
                handleReg={ this.handleGiverRegister}
              />)}
          />
          <Route
            path='/giver/signin'
            render={ ( props ) => (
             <GiverSign
              { ...props }
              handleLogin={ this.handleGiverLogin }
            />)}
          />
          <Route
            path='/giver/complete'
            render={ ( props ) =>
              <GiverThank
                { ...props } 
              /> }
          />
          <Route
            path='/giver/status'
            render={ ( props ) =>
              <GiverStatus { ...props}
                requests={requests} 
              /> }
          />

          {/*LiveChat*/}
          <Route
            path='/live'
            render={ ( props ) =>
            <Live 
              { ...props } 
              /> } 
          />
        </Switch>
      </div>
    );
  }
}

export default App
