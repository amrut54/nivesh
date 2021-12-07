import React from 'react';
import './Header.css';

import { useState } from 'react';
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
         
          <NavLink to='/ARN' activeStyle>
            ARN
          </NavLink>
          <NavLink to='/become-mutual-fund-distributor' activeStyle>
            BMF
          </NavLink>
          <NavLink to='/retirement' activeStyle>
            Retirement
          </NavLink>
          <NavLink to='/building-long-terms' activeStyle>
            BLT
          </NavLink>
          <NavLink to='/savetax' activeStyle>
            Save Tax
          </NavLink>
          <NavLink to='/save-for-children' activeStyle>
            SFC
          </NavLink>
          <NavLink to='/grow-your-mutual-fund' activeStyle>
            GMF
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

