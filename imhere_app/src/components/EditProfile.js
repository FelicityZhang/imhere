import React, { Component } from 'react'
import './EditProfile.css'

export default class EditProfile extends Component {
  render() {
    return (
      <div id="editProfile">
        Hi {this.props.match.params.usertype}
      </div>
    )
  }
}
