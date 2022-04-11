import React, { useState  } from "react";
import { Nav, Logo, Hamburger,Menu, MenuLink } from "./NavbarStyles";

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);
const [github, setGithub] = useState("");

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
      </Hamburger>
      <Menu isOpen = {isOpen} >
        <MenuLink to="/about" onClick={() => setIsOpen(!isOpen)}>About</MenuLink>
        <MenuLink onClick={() => setGithub(
          (window.location.href = "https://github.com/suheyl-yazici")
        )} to={github} target="_blank" >Github</MenuLink>
        <MenuLink to="/" onClick={() => setIsOpen(!isOpen)} onMouseUp={() => sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
