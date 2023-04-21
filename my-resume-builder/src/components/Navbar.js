import React from 'react'
import logo from './Resumelogo.jpg'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  
  return (
    
    
    <nav className={` d-flex navbar navbar-expand-lg p-3 navbar-${props.mode} bg-${props.mode}`}>
    <Link className="navbar-brand" to="/createnewresume">
        <img src={logo} alt="logo" />
   </Link>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/about">Home </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/viewresume">View Resume</Link>
        </li> 
        <li className="nav-item active">
          <Link className="nav-link" to="/createnewresume">Create New Resume</Link>
        </li> 
        <li className="nav-item active">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li> 
        <li className="nav-item active">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
      </div>
      <div className={`form-check form-switch ml-auto mr-6 my-3  text-${props.mode === 'light' ? 'dark' : 'light'}`} >
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </nav>
  )
}
