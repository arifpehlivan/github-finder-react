import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return ( 
      <nav className="navbar navbar-dark bg-primary">
          <a href="/#" className="navbar-brand ">
            <FontAwesomeIcon icon={this.props.icon} />{this.props.title}
          </a>
      </nav>
    )
  }
}

Navbar.defaultProps={
    title:"Github Finder",
    icon:"fa-brands fa-github"
}

export default Navbar