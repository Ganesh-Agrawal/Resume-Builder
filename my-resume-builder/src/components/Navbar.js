import React from 'react'
import logo from './Resumelogo.jpg'

export default function Navbar() {
  return (
    
    
    <nav className="navbar navbar-dark bg-dark  navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
   <img src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">About Us</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">Create New</a>
        </li> <li className="nav-item active">
          <a className="nav-link" href="/">Sign Up</a>
        </li> 
        <li className="nav-item active">
          <a className="nav-link" href="/">Login</a>
        </li>
      </ul>
      </div>
  </nav>
  )
}
