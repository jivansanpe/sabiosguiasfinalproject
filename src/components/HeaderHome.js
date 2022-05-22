import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './HeaderHomeElements';

const Navbar = () => {
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