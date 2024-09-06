import React from 'react'
import '../../assets/style/Navbar.css';
import { FaSearch } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/Logo.png'
import defaultPic from '../../assets/images/no-user.jpg'
import { MdNotifications, MdMessage } from 'react-icons/md';


const NavBar = () => {
  return (
    <>
      <div className='nav-main-flex'>
        <div className="container">
          <Navbar expand="lg" sticky="top d-flex gap-5 p-0">
            <Navbar.Brand href="#">
              <div className='nav-bar-flex-section d-flex align-items-center gap-2 mb-3'>
                <div className='list-icon' >
                  <img src={logo} alt='logo'></img>
                </div>
                <div className='navbar-logo'>
                  <h2>Job<span className='logo-color'>Maple</span></h2>
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav">
              <span><i className="fa fa-bars" aria-hidden="true"></i></span>
            </Navbar.Toggle>
            <Navbar.Collapse>
              <div className='nav-searchbar'>
                <div className='search-input d-flex align-items-center gap-2 mb-3'>
                  <input type='text' placeholder='Search Schedule..' />
                  <div className='search-logo'>
                    <FaSearch />
                  </div>
                </div>
              </div>
            </Navbar.Collapse>
            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto">
                <div className='logo-section d-flex align-items-center justify-content-center gap-4'>
                  <div className='notification-logo'>
                    <MdNotifications size={24} color="black" style={{cursor: 'pointer'}} />
                  </div>
                  <div className='message-logo'>
                    <MdMessage size={24} color="black" style={{cursor: 'pointer'}} />
                  </div>
                  <div className='user-logo'>
                    <img src={defaultPic} alt='user' style={{cursor: 'pointer'}}></img>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>
      </div>
    </>
  )
}

export default NavBar
