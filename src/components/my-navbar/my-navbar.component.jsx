import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
            
          </Navbar.Brand>
        </div>
        <div>
        <ul key="nav">
              <li>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#songs">Songs</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <NavDropdown title="Blog">
              <NavDropdown.Item href="">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Home</NavDropdown.Item>
              <NavDropdown.Item href="">About</NavDropdown.Item>
              <NavDropdown.Item href="">Posts</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>

          </Navbar.Collapse>
          </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;