import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import About from '../About/About';


function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Sensess' Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about" onClick = {() => {props.setPage("about")}}>About</Nav.Link>
                <Nav.Link href="#projects" onClick = {() => {props.setPage("projects")}}>Portfolio</Nav.Link>
                
                  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Header;