import React, { Component } from 'react';
import '../Status.css'

const url = 'http://localhost:1234'
// const url = 'https://imhereapp.herokuapp.com'

export default class GiverStatus extends Component {
    constructor(props){
      super(props)
      this.state={
        notApprovedPage:0,
        approvedNotCompletePage:0,
        completePage:0
      }
    }


    render() {
      const notApproved = this.props.requests.filter((request) => !request.approval)
      const approvedNotComplete = this.props.requests.filter(request => request.approval && !request.complete)
      const complete = this.props.requests.filter(request => request.complete)
      const notApprovedMax = Math.ceil(notApproved.length/3);
      const approvedNotCompleteMax = Math.ceil(approvedNotComplete.length/3);
      const completeMax = Math.ceil(complete.length/3)
      console.log(notApprovedMax+" "+approvedNotCompleteMax+" "+completeMax);
      const displayRequests = (requests,page, bool) => {
        return requests.map((request,ind) => {
          if(ind<(page*3+3)&&ind>=page*3){
            return(
              <div 
                id="request">
                  <h2>{request.title}</h2>
                  <p>{request.start_time} to {request.end_time}</p>
                  <h3>{request.description}</h3>
              {bool?<button
              className = "deleteButton"
              key={request.id}
              onClick = {event =>this.props.handleDelete(event)}
              >Delete</button>
              :null}
              </div>
            )
          }
        })
      }
      const displayNotApproved = displayRequests(notApproved,this.state.notApprovedPage,true);
      const displayApprovedNotComplete = displayRequests(approvedNotComplete, this.state.approvedNotCompletePage,false);
      const displayComplete = displayRequests(complete, this.state.completePage,false)
      return(
        <div id="giverStatus">
          {displayNotApproved.length?(
            <div id="newReq">
              <h1>New Requests</h1>
              <p>Page {this.state.notApprovedPage+1} of {notApprovedMax}</p>
              <div>
                {displayNotApproved}
              </div>
              {(this.state.notApprovedPage+1)<notApprovedMax?(
              <button
                className="pageChangeButton"
                onClick={(e)=>{
                  this.setState(prevState=>{
                    return{
                    ...prevState,
                    notApprovedPage:prevState.notApprovedPage+1
                    }
                  })
                }}
              >Next Page</button>):(
                null
              )}
              {this.state.notApprovedPage?(
              <button
                class="pageChangeButton"
                onClick={(e)=>{
                  this.setState(prevState=>{
                    return{
                    ...prevState,
                    notApprovedPage:prevState.notApprovedPage-1
                    }
                  })
                }}
              >Previous Page</button>):(
                null
              )}
            </div>):
            <h1 id="newReq">You have no new requests</h1>
          }
          {displayApprovedNotComplete.length?(
            <div id="ongoingReq">
              <h1>Ongoing Requests</h1>
              <p>Page {this.state.approvedNotCompletePage+1} of {approvedNotCompleteMax}</p>
              <div>
                {displayApprovedNotComplete}
              </div>
              {(this.state.approvedNotCompletePage+1)<approvedNotCompleteMax?(
              <button
                className="pageChangeButton"
                onClick={(e)=>{
                  this.setState(prevState=>{
                    return{
                    ...prevState,
                    approvedNotCompletePage:prevState.approvedNotCompletePage+1
                    }
                  })
                }}
              >Next Page</button>):(
                null
              )}
              {this.state.approvedNotCompletePage?(
              <button
                class="pageChangeButton"
                onClick={(e)=>{
                  this.setState(prevState=>{
                    return{
                    ...prevState,
                    approvedNotCompletePage:prevState.approvedNotCompletePage-1
                    }
                  })
                }}
              >Previous Page</button>):(
                null
              )}
            </div>):
            <h1 id="ongoingReq">You have no ongoing requests</h1>
          }
          {displayComplete.length?(
            <div id="completeReq">
              <h1>Completed Requests</h1>
              <p>Page {this.state.completePage+1} of {completeMax}</p>
              <div>
                {displayComplete}
              </div>
              {(this.state.completePage+1)<completeMax?(
              <button
                className="pageChangeButton"
                onClick={(e)=>{
                  this.setState(prevState=>{
                    return{
                    ...prevState,
                    completePage:prevState.completePage+1
                    }
                  })
                }}
              >Next Page</button>):(
                null
              )}
              {this.state.completePage?(
              <button
                class="pageChangeButton"
                onClick={(e)=>{
                  this.setState(prevState=>{
                    return{
                    ...prevState,
                    completePage:prevState.completePage-1
                    }
                  })
                }}
              >Previous Page</button>):(
                null
              )}
            </div>):
            <h1 id="completeReq">You have no complete requests</h1>
          }
        </div>
      )
  }
}