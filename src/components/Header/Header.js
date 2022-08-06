import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import About from '../About/About';
import './Header.css';

function Header(props) {
    return (
        <Navbar variant="flat" expand="lg" className="justify-content-center">
          <Container className="justify-content-center">
            <Navbar.Brand className="font-link" href="#home" >Sensess' Portfolio</Navbar.Brand>
            
            
              <Nav className="me-auto">
                <Nav.Link className="font-link" href="#about" onClick = {() => {props.setPage("about")}}>About</Nav.Link>
                <Nav.Link className="font-link" href="#projects" onClick = {() => {props.setPage("projects")}}>Portfolio</Nav.Link>
                
                  
              </Nav>
            
          </Container>
        </Navbar>
      );
    }

export default Header;