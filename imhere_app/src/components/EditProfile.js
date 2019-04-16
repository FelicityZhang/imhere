import React, { Component } from 'react'
import './EditProfile.css'

export default class EditProfile extends Component {
  render() {
    const type = this.props.match.params.usertype
    const user = this.props.user
    console.log(user)
    return (
      <div id={`${type}EditProfile`}>
          <div className="editProfileProfile">
            <img 
              id="renderGiverPicture"
              alt={`${user.name}'s Profile`} src={user.picture_url}/>
            <div className="renderGiverWords">
                <h2
                  className="renderGiverName"
                >{user.name}</h2>
                <p>{user.description}</p>
            </div>
          </div>
        </div>
    )
  }
}
