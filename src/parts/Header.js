import React from 'react';
import Button from 'elements/button';
import BrandText from './BrandText';
import Fade from 'react-reveal/Fade';
import { useLocation } from 'react-router-dom';
export default function Header({ isCentered }) {
  const location = useLocation();
  const getNavLinkCLass = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  if (isCentered)
    return (
      <Fade>
        <header className='spacing-sm'>
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
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <BrandText />
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ms-auto'>
                <li className={`nav-item ${getNavLinkCLass('/')}`}>
                  <Button className='nav-link' href='/' type='link'>
                    Home
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkCLass('/browser-by')}`}>
                  <Button className='nav-link' href='/browser-by' type='link'>
                    Browser by
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkCLass('/stories')}`}>
                  <Button className='nav-link' href='/stories' type='link'>
                    Stories
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkCLass('/agents')}`}>
                  <Button className='nav-link' href='/agents' type='link'>
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
