import React from 'react';
import './Header.css';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './HeaderElements';
import logo from './Images/Nivesh 1 (1).png'

const Header = () => {
  return (
    <div className="container">
      <Nav>
      <NavLink to='/' activeStyle>
        <img class="logo" src={logo} alt="" width="75%"/>
      </NavLink>
   
        <NavMenu>
          <NavLink to='/aboutus' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/contactus' activeStyle>
            Contact Us
          </NavLink>
         
          <NavLink to='/contactus' activeStyle>
            Contact Us
          </NavLink>
          
        
          
          {/* Second Nav */}
           <NavBtnLink to='/'>English</NavBtnLink> 
        </NavMenu>
        {/*<NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
          </Nav>
    
    </div>
  );
};

export default Header;

