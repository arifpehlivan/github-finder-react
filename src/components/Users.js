import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[
                {
                    id:"1",
                    login: "arifpehlivan",
                    avatar_url: "https://avatars.githubusercontent.com/u/85321673?v=4",
                    html_url: "https://github.com/arifpehlivan",
                },
                {
                    id:"2",
                    login: "arifpehlivan",
                    avatar_url: "https://avatars.githubusercontent.com/u/85321673?v=4",
                    html_url: "https://github.com/arifpehlivan",
                },
                {
                    id:"3",
                    login: "arifpehlivan",
                    avatar_url: "https://avatars.githubusercontent.com/u/85321673?v=4",
                    html_url: "https://github.com/arifpehlivan",
                },
            ]
        }
    }
  render() {
    return (
      <div className='container mt-3'>
          <div className="row">
            {this.state.users.map(user=>(
                <User key={user.id} user={user}/>
            ))}
          </div>
      </div>
    )
  }
}

export default Users