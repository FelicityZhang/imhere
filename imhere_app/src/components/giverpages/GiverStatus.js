import React, { Component } from 'react';

export default class GiverStatus extends Component {
    render() {
      const requests = this.props.requests.map(request => {
        return(
          <div>
              <span> Description </span>
              <h2>{request.description}</h2>
                <br/>
              <span> Project Begins </span>
              <h2>{request.start_time}</h2>
                <br/>
              <span> Project End</span>
              <h2>{request.title}</h2>
              <h2> Requested Service</h2>
          </div>
        )
      })
      return(
        <div>
          {requests}
        </div>
      )
  }
}