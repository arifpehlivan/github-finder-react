import React, { Component } from 'react'

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            id: "85321673",
            login: "arifpehlivan",
            avatar_url: "https://avatars.githubusercontent.com/u/85321673?v=4",
            html_url: "https://github.com/arifpehlivan"
        }
    }
  render() {
      const {login,avatar_url,html_url} = this.state;
    return (
      <div>
          <div className="card m-2">
              <div className="row">
                  <div className="col-md-3">
                      <img src={avatar_url} alt="" className='card-img'/>
                  </div>
                  <div className="col-md-9">
                      <div className="card-body">
                          <h5 className="card-title">{login}</h5>
                          <a href={html_url} className="btn btn-primary btn-sm">Go Profile</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default User