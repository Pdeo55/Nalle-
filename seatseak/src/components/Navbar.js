import React from 'react'
import "../assets/css/navbar.css"
import logo from "../assets/logo.png"
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="fixed-top px-2" expand='lg'>
      <div className="container">
        <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
        <Navbar.Toggle aria-controls="navbarSupportedContent">
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <a className="nav-link" href="/">HOME</a>
            </li>
         
       
            <li className="nav-item  px-2">
              <a className="nav-link" href="/#shorcuts">MAKE PLANS</a>
            </li>
            
            <li className="nav-item  px-2">
              <a className="nav-link" href="/contact-us">CONTACT US</a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavBar
