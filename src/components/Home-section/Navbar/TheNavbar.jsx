import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import TheNavbarProps from "./TheNavbarProps";
import { Link } from "react-router-dom";


function TheNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light" className="navbar">
      <LinkContainer to="/" >
        <Navbar.Brand href="#home" className="navbar_img">
          <img src="/neutrosys-logo-cropped.png" alt="" />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav navbar_list">
        <Nav className="nav-margin">
          <TheNavbarProps link="/" name="Home" />
          <TheNavbarProps link="/aboutus"  name="About Us" />
          <TheNavbarProps link="/services" name="Services" />
          <TheNavbarProps link="/employers" name="Employers" />
          <TheNavbarProps link="/careers" name="Careers" />
          <TheNavbarProps link="/contactus" name="Contact Us" />
        </Nav>
        <Nav>
          <Nav.Link href="#login">
            <button className="navbar_button">Login</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TheNavbar;
