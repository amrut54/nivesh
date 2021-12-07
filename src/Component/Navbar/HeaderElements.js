import { FaBars } from 'react-icons/fa';

import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  font-family:"Raleway",sans-serif;
  font-weight:600;
  font-size:16px;
  justify-content: space-between;

  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #f89748;
    font-weight:600;
    font-size:16px;
    justify-content:space-between;
  }
  &.hover {
    color:#f89748;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 25px;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {

    display:block;
    background-color: black;

   
  }
`;

export const NavBtn = styled.nav`
  display: flexe;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px ;
  border: 1px solid grey;
  background: #fff;
  padding: 10px 22px;
  color: #000;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f89748;
  }
`;