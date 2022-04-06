import React, { Component } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import axios from "axios"
import Alert from "./Alert"
export class App extends Component {
  constructor(props){
    super(props);
    this.searchUsers=this.searchUsers.bind(this);
    this.clearUsers=this.clearUsers.bind(this);
    this.setAlert=this.setAlert.bind(this);
    this.state={
      loading: false,
      users:[],
      alert: null
    }
  }
  searchUsers(keyword){
    this.setState({loading:true});
    setTimeout(()=>{
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then(res=>this.setState({users:res.data.items, loading:false}));
    },1000)
    
  }
  clearUsers(){
    this.setState({users: []});
  }
  setAlert(msg, type){
    this.setState({alert:{msg,type}});
    setTimeout(()=>{
      this.setState({alert:null})
    },3000)
  }
  render() {
    return (
      <>
        <Navbar title=" Github Finder" icon="fa-brands fa-github"/>
        <Alert alert={this.state.alert}/>
        <Search 
        searchUsers={this.searchUsers} 
        clearUsers={this.clearUsers} 
        showClearButton={this.state.users.length>0 ? true:false}
        setAlert={this.setAlert}
        />
        <Users users={this.state.users} loading={this.state.loading}/>
      </>
      
    )
  }
}

export default App