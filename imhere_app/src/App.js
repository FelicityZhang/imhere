import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={(props)=><Landing {...props}/>}/>

          {/*Seekers*/}
          <Route
            exact path='/seeker'
            render={(props)=><SeekerLogin {...props}/>}/>
          <Route
            path='/seeker/registration'
            render={(props)=><SeekerReg {...props}/>}/>
          <Route
            path='/seeker/signin'
            render={(props)=><SeekerSign {...props}/>}/>
          <Route
            path='/seeker/browse'
            render={(props)=><ListGiver {...props}/>}/>
          <Route
            exact path='/seeker/search'
            render={(props)=><SearchGiver {...props}/>}/>
          <Route
            exact path='/seeker/search/:id'
            render={(props)=><RenderGiver {...props}/>}/>
          <Route
            path='/seeker/search/:id/request'
            render={(props)=><Request {...props}/>}/>
          <Route
            path='/seeker/:id'
            render={(props)=><SeekerStatus {...props}/>}/>
          <Route
            path='/seeker/complete'
            render={(props)=><SeekerThank {...props}/>}/>

          {/*Giver*/}
          <Route
            path='/giver'
            render={(props)=><GiverLogin {...props}/>}/>
          <Route
            path='/giver/registration'
            render={(props)=><GiverReg {...props}/>}/>
          <Route
            path='/giver/signin'
            render={(props)=><GiverSign {...props}/>}/>
          <Route
            path='/giver/complete'
            render={(props)=><GiverThank {...props}/>}/>
          <Route
            path='/giver/:id'
            render={(props)=><GiverStatus {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
