import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Live from './components/Live';
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

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      state:''
    }

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
            render={ ( props ) => <SeekerLogin { ...props } /> } />
          <Route
            path='/seeker/registration'
            render={ ( props ) => <SeekerReg { ...props } postSeeker={this.postSeeker}/> } />
          <Route
            path='/seeker/signin'
            render={ ( props ) => <SeekerSign { ...props } /> } />
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
            render={ ( props ) => <GiverLogin { ...props } /> } />
          <Route
            path='/giver/registration'
            render={ ( props ) => <GiverReg { ...props } postGiver={this.postGiver}/> } />
          <Route
            path='/giver/signin'
            render={ ( props ) => <GiverSign { ...props } /> } />
          <Route
            path='/giver/complete'
            render={ ( props ) => <GiverThank { ...props } /> } />
          <Route
            path='/giver/status'
            render={ ( props ) => <GiverStatus { ...props } /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
