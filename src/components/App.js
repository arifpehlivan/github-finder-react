import React, { Component } from 'react'
import Navbar from './Navbar'
import Users from './Users'

export class App extends Component {
  render() {
    return (
      <>
        <Navbar title="Github Finder" icon="fa-brands fa-github"/>
        <Users/>
      </>
      
    )
  }
}

export default App