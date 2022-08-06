import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import LinkedIn from '../../assets/Linkedin.svg';
import Github from '../../assets/Github.svg';
import Instagram from '../../assets/Instagram.svg';
import './Footer.css';

function Footer() {
    return (
        <Container className="justfiy-content-center">
        <Navbar fixed="bottom" variant="flat" id='navbar'>
        <Container id='fix'>
          <Navbar.Brand href="#home">
            <a href="https://github.com/amadayasuki">
          <img
            src={Github}
            alt="github"
          />
          </a>
          <a href="https://www.linkedin.com/in/sensess-yentzer-915882160/">
          <img
            src={LinkedIn}
            alt="github"
          />
          </a>
          <a href="https://www.instagram.com/sensessyentzer/">
          <img
            src={Instagram}
            alt="github"
          />
          </a>
           
          </Navbar.Brand>
        </Container>
        </Navbar>
        </Container>
        
    );
}

export default Footer;