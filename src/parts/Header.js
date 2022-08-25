import React, { useState } from 'react';
import Button from 'elements/button';
import BrandText from './BrandText';
import Fade from 'react-reveal/Fade';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
export default function Header({ isCentered }) {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const getNavLinkCLass = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  if (isCentered)
    return (
      <Fade>
        <header className='spacing-sm header'>
          <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light'>
              <BrandText isMarginAuto />
            </nav>
          </div>
        </header>
      </Fade>
    );
  return (
    <Fade>
      <header>
        <Container>
          <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
            <Navbar.Brand>
              <BrandText />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='ms-auto'>
                <li className={`nav-item ${getNavLinkCLass('/')}`}>
                  <Nav.Link>
                    <Button className='nav-link' href='/' type='link'>
                      Home
                    </Button>
                  </Nav.Link>
                </li>
                <li className={`nav-item ${getNavLinkCLass('/browser-by')}`}>
                  <Nav.Link>
                    {' '}
                    <Button className='nav-link' href='/browser-by' type='link'>
                      Browser by
                    </Button>
                  </Nav.Link>
                </li>
                <li className={`nav-item ${getNavLinkCLass('/stories')}`}>
                  <Nav.Link>
                    {' '}
                    <Button className='nav-link' href='/stories' type='link'>
                      Stories
                    </Button>
                  </Nav.Link>
                </li>
                <li className={`nav-item ${getNavLinkCLass('/agents')}`}>
                  <Nav.Link>
                    {' '}
                    <Button className='nav-link' href='/agents' type='link'>
                      Agents
                    </Button>
                  </Nav.Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </Fade>
  );
}
