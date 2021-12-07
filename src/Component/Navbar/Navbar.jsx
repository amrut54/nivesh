import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../Layouts/Home/images/Nivesh 1.png';
import {
          NavLink,
          Bars,
          NavMenu,
          NavBtn,
          NavBtnLink
        } from './HeaderElements';


    function Navmenu() {
        return (
            <div className="container">
          <div className="Navmenu">
          <Navbar  variant="light"
            sticky="top" expand="md" collapseOnSelect>
            <Navbar.Brand>
                      <a href="/">
              <img src={logo} width="240vw" height="auto" /></a>{' '}
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse className="right-aligned">
              <Nav>
              <NavDropdown title="Products">
              <NavDropdown.Item href="/mutual-fund">Mutual Fund</NavDropdown.Item>
              <NavDropdown.Item href="/fixed-deposit">Fixed Desposit</NavDropdown.Item>
              <NavDropdown.Item href="/pms">PMS</NavDropdown.Item>
              <NavDropdown.Item href="/p2p-loan">P2P Loan</NavDropdown.Item>
              <NavDropdown.Item href="/aif">AIF</NavDropdown.Item>
              <NavDropdown.Item href="/nps">NPS</NavDropdown.Item>
              <NavDropdown.Item href="/corporate-bonds">Corporate Bond</NavDropdown.Item>
              <NavDropdown.Item href="/capital-gain-bond">Capital Gain Bond</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Partner">
              <NavDropdown.Item href="/become-mutual-fund-distributor">Become MF Distributor</NavDropdown.Item>
              <NavDropdown.Item href="/grow-your-mutual-fund">Grow MF Business</NavDropdown.Item>
              <NavDropdown.Item href="/arn">AMFI ARN Registeration</NavDropdown.Item>
              
            </NavDropdown>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                <NavBtnLink to='/'>English</NavBtnLink> 
              </Nav>
            </Navbar.Collapse>
    
          </Navbar>
        </div>
        </div>
                  
                
        );
    }

export default Navmenu;