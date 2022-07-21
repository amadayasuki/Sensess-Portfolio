import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import LinkedIn from '../../assets/Linkedin.svg';
import Github from '../../assets/Github.svg';
import Instagram from '../../assets/Instagram.svg';

function Footer() {
    return (
        <Navbar fixed="bottom" variant="flat" id='navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <a href="https://github.com">
          <img
            src={Github}
            alt="github"
          />
          </a>
          <a href="https://github.com">
          <img
            src={LinkedIn}
            alt="github"
          />
          </a>
          <a href="https://github.com">
          <img
            src={Instagram}
            alt="github"
          />
          </a>
           
          </Navbar.Brand>
        </Container>
        </Navbar>
        
    );
}

export default Footer;