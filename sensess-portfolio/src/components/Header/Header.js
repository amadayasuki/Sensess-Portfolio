import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import About from '../About/About';


function Header(props) {
    return (
        <Navbar bg="light" expand="lg" className=" justify-content-between">
          <Container>
            <Navbar.Brand href="#home">Sensess' Portfolio</Navbar.Brand>
            
            
              <Nav className="me-auto">
                <Nav.Link href="#about" onClick = {() => {props.setPage("about")}}>About</Nav.Link>
                <Nav.Link href="#projects" onClick = {() => {props.setPage("projects")}}>Portfolio</Nav.Link>
                
                  
              </Nav>
            
          </Container>
        </Navbar>
      );
    }

export default Header;