import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import Github from '../../assets/Github.svg';
function Footer() {
    return (
        <Navbar fixed="bottom" bg="dark" id='navbar'>
        <Container>
          <Navbar.Brand href="#home">
             
            <img
              src={Github}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="github"
            /> 
           
          </Navbar.Brand>
        </Container>
        </Navbar>
        
    );
}

export default Footer;