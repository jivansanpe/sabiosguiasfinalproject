import React from 'react';
import rss from "../RSS.xml";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './HeaderHomeElements';

const Navbar = () => {
  const handleClick2 = () => {
    window.open(rss, '_self');
  }
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='/img/logo.png' alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/all-routes' activeStyle>
            Rutas
          </NavLink>
          <NavLink to='/video-360/hub' activeStyle>
            VR
          </NavLink>
          <span onClick={handleClick2} className="pointer">
            RSS
          </span>
          <NavLink to='/Home' activeStyle>
            Inicio
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Registrarse / Iniciar sesión</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;