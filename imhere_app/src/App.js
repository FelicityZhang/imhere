import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import Profile from './components/Profile';
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
  requests,
  users
} from './Data';
import{
  seekerRegister,
  giverRegister,
  seekerLogin,
  giverLogin
} from './services/api-helper'
import './App.css';
import EditProfile from './components/EditProfile';
const logo = require('./images/logo.gif');


// const url = 'http://localhost:1234'

const url = 'https://imhereapp.herokuapp.com'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: '',
      user:{},
      requests:[],
      allGivers:[],
      searchedGiver:[],
      searchKeyword:''
    }
    this.getAllGivers = this.getAllGivers.bind( this )
    this.searchGiverBySkill=this.searchGiverBySkill.bind(this)


    this.handleSeekerLogin = this.handleSeekerLogin.bind( this )
    this.handleSeekerRegister = this.handleSeekerRegister.bind( this )
    this.getSeeker = this.getSeeker.bind( this )
    this.getSeekerInfo = this.getSeekerInfo.bind(this);
    this.seekerUpdateProfile = this.seekerUpdateProfile.bind(this);


    this.handleGiverLogin = this.handleGiverLogin.bind( this )
    this.handleGiverRegister = this.handleGiverRegister.bind( this )
    this.getGiver = this.getGiver.bind( this )
    this.getGiverInfo = this.getGiverInfo.bind(this);
    this.giverUpdateProfile = this.giverUpdateProfile.bind(this);

    this.handleRequestDelete = this.handleRequestDelete.bind(this);

  }

  async giverUpdateProfile(data){
    console.log(data);
    const opts = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const fetchData = await fetch(`${url}/giver/update/${this.state.user.id}`, opts)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return e.message
      })
    this.getGiver({email:this.state.user.email});
    return fetchData;
  }

  async seekerUpdateProfile(data){
    const opts = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const fetchData = await fetch(`${url}/seeker/update/${this.state.user.id}`, opts)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return e.message
      })
    this.getSeeker({email:this.state.user.email});
    return fetchData;
  }
 

  async handleRequestDelete(id) {
    console.log(id)
   await fetch(`${url}/request/delete/${id}`, {
     method: 'DELETE'
   }).then(response => {
     this.getGiverInfo(this.state.user.id)
     return response.json();
   })
   this.getGiverInfo(this.state.user.id);
  }

  async searchGiverBySkill(data){
    const query = data.split(' ').join('#')
    console.log("query"+query)
    let endPoint = `${ url }/seeker/search/${query}`
    console.log("data"+data)
    fetch( endPoint )
      .then( response => response.json() )
      .then( json => {
        console.log(json)
        this.setState({ searchedGiver: json.givers, searchKeyword:json.description})
      } )
  }
  async handleSeekerLogin(data) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const fetchData = await fetch(`${url}/seeker/signin`, opts)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return {error:e.message}
      })
    if(fetchData.status==401||fetchData.status==233){
      return false;
    }else{
      this.getSeeker(data)
      this.setState({
        currentUser: decode(fetchData.jwt, { header: true })
      })
      localStorage.setItem("jwt", fetchData.jwt)
      return true;
    }
  }

  async handleSeekerRegister(data) {
    const userData = await seekerRegister( data );
    console.log(userData)
    this.getSeeker(data);
    this.setState({
      currentUser: decode(userData.jwt, { header: true })
    })
  }

  async getSeeker(data){
    console.log(data)
    const opts = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const fetchData = await fetch(`${url}/seeker`, opts)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return {error:e.message}
      })
    this.setState({
      user:fetchData
    })
    this.getSeekerInfo(fetchData.id);
  }

  async getSeekerInfo(id){
    const fetchData = await fetch(`${url}/seeker/status/${id}`)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return {error:e.message}
      })
      console.log(fetchData);
      if(fetchData.requests){
        this.setState({requests:fetchData.requests});
      }
  }
  async handleGiverLogin(data) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const fetchData = await fetch(`${url}/giver/signin`, opts)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return {error:e.message}
      })
    if(fetchData.status==401||fetchData.status==233){
      return false;
    }else{
      this.getGiver(data)
      this.setState({
        currentUser: decode(fetchData.jwt, { header: true })
      })
      localStorage.setItem("jwt", fetchData.jwt)
      return true;
    }
  }

  async handleGiverRegister(data) {
    console.log(data);
    const userData = await giverRegister( data );
    this.getGiver(data);
    this.setState({
      currentUser: decode(userData.jwt, { header: true })
    })
  }

  async getGiver(data){
    console.log(data)
    const opts = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const fetchData = await fetch(`${url}/giver`, opts)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return {error:e.message}
      })
    this.setState({
      user:fetchData
    })
    this.getGiverInfo(fetchData.id);
  }

  async getGiverInfo(id){
    const fetchData = await fetch(`${url}/giver/status/${id}`)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return {error:e.message}
      })
      console.log(fetchData);
      if(fetchData.requests){
        this.setState({requests:fetchData.requests});
      }
  }
  async getAllGivers(){
    const fetchData = await fetch(`${url}/seeker/all`)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return {error:e.message}
      })
      this.setState({allGivers:fetchData});
  }

  componentDidMount(){
    this.getAllGivers();
  }

  render() {
    return (
      <div className="App">
        <Profile
          user={this.state.user} 
        />
        <SearchGiver handleSearch={this.searchGiverBySkill}/>
        <img
          className={this.props.history.location.pathname==='/'?"noDisplayLogo":"displayLogo"}
          id="nonMainlogo"
          src={logo}
          onClick={()=>{
            this.props.history.push('/')
          }}
        />
        <header
          className={this.props.history.location.pathname==='/'?"noDisplayHeader":"displayHeader"}
          id="generalHeader">
        </header>

        <footer
          className={this.props.history.location.pathname==='/'?"noDisplayFooter":"displayFooter"}
          id="generalFooter">
          <a 
            id="aboutUs"
            className={this.props.history.location.pathname==='/'?"noDisplayAbout":"displayAbout"}
            href="https://github.com/FelicityZhang/imhere"
          >About us</a>
        </footer>

        <Switch>
          <Route
            exact path='/'
            render={ ( props ) => <Landing { ...props } /> } />

          <Route
            path='/:usertype/profile'
            render={ ( props ) => <EditProfile 
              { ...props }
              user={this.state.user}
              seekerUpdateProfile={(data)=>this.seekerUpdateProfile(data)}
              giverUpdateProfile={(data)=>this.giverUpdateProfile(data)}
            /> } />

          {/*Seekers*/ }
          <Route 
            exact path='/seeker' 
            render={ ( props ) => < SeekerLogin {...props}/>}/>
          <Route 
            path='/seeker/registration'
            render={ ( props ) => (
              <SeekerReg 
                { ...props } 
                handleReg={ this.handleSeekerRegister}
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
            render={ ( props ) => 
            <ListGiver { ...props } 
              givers={this.state.allGivers}
              searched={this.state.searchedGiver}
              keyword={this.state.searchKeyword}
            /> } />
          <Route
            path='/seeker/status'
            render={ ( props ) =>
              <SeekerStatus { ...props}
                requests={this.state.requests} 
              /> }
          />
          <Route
            exact path='/seeker/:giverid'
            render={ ( props ) => <RenderGiver { ...props } givers={this.state.allGivers} /> } />
          <Route
            path='/seeker/:giverid/request'
            render={ ( props ) => <Request { ...props } seeker_id={this.state.user.id} givers={this.state.allGivers}/> } />
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
                requests={this.state.requests} 
                handleDelete = {this.handleRequestDelete}
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

export default withRouter(App);
