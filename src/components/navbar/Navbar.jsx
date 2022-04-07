import React, { useState } from "react";
import { Nav, Logo, Hamburger,Menu, MenuLink } from "./NavbarStyles";
// import {GiHamburgerMenu} from "react-icons/gi";


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/home" onClick={() => setIsOpen(false)}>
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        {/* <GiHamburgerMenu /> */} {/* spanlarla aynı işlemi yapıyorlar */}
      </Hamburger>
      <Menu isOpen = {isOpen} >
        <MenuLink to="/about" onClick={() => setIsOpen(!isOpen)}>About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/" onClick={() => setIsOpen(!isOpen)}>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
