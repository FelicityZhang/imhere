import React, { Component } from 'react'
import './EditProfile.css'
const placeholder= require('../images/placeholder.png');

export default class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state={
      userType:'',
      name: "My Name",
      email: "My Email",
      description: "My Description"
    }
    this.handleChangebySetState=this.handleChangebySetState.bind(this);
    this.submitChangesByPut=this.submitChangesByPut.bind(this);
  }
  handleChangebySetState = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  static getDerivedStateFromProps(nextProps,prevState){
    return{
      name: nextProps.user.name||"My Name",
      email: nextProps.user.email||"My Email",
      description:nextProps.user.description||"My Description"
    }
  }

  submitChangesByPut(){
    if(this.state.userType==="seeker"){
      this.props.seekerUpdateProfile({
        name:this.state.name,
        email:this.state.email,
        description:this.state.description
      })
    }else{
      this.props.giverUpdateProfile({
        name:this.state.name,
        email:this.state.email,
        description:this.state.description
      })
    }
  }

  componentDidMount(){
    this.setState({
      userType: this.props.match.params.usertype
    })
  }

  render() {
    const type = this.props.match.params.usertype
    const user = this.props.user
    return (
      <div id={`${type}EditProfile`}>
      
          <div id="editProfileProfile">
            <img 
              id="renderProfilePicture"
              alt={`${user.name}'s Profile`} src={user.picture_url||placeholder}/>
            <div className="renderGiverWords">
            <h1 id="editProfileTitle">Edit Profile</h1>
              <input
                id="renderGiverName"
                name="name"
                onChange={this.handleChangebySetState}
                value={this.state.name}
              />
              <input
                onChange={this.handleChangebySetState}
                name="email"
                value={this.state.email}/>
              <input
                onChange={this.handleChangebySetState}
                name="description"
                value={this.state.description}/>
              <button
                onClick={this.submitChangesByPut}
              >Update</button>
            </div>
          </div>
        </div>
    )
  }
}
