import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './Profile.css'
const placeholder= require('../images/placeholder.png');


class Profile extends Component {
  render() {
      console.log(this.props)
    return (
      <div
        id="profile"
        onClick={()=>{
            if(this.props.history.location.pathname.includes('/seeker')){
                this.props.history.push('/seeker/profile')
            }else{
                this.props.history.push('/giver/profile')
            }
        }}
      >
        <div
            id="profileNameDisplay"
            className={this.props.history.location.pathname === '/'||
            this.props.history.location.pathname==='/giver'||
            this.props.history.location.pathname==='/seeker'||
            this.props.history.location.pathname.includes("signin")||
            this.props.history.location.pathname.includes("registration")?"noDisplayProfile":"displayProfile"}
        >{this.props.user.name||this.props.history.location.pathname.slice(1,7).replace('/','')}</div>
        <img
            id="profilePic"
            className={this.props.history.location.pathname === '/'||
            this.props.history.location.pathname==='/giver'||
            this.props.history.location.pathname==='/seeker'||
            this.props.history.location.pathname.includes("signin")||
            this.props.history.location.pathname.includes("registration")?"noDisplayProfile":"displayProfile"}
            src={this.props.user.picture_url||placeholder}
        />

      </div>
    )
  }
}
export default withRouter(Profile);