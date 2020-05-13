import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo-fale-mais.svg';
import { Menu } from './styles';

function Header() {
  return (
    <>
      <Menu>
        <img src={logoImg} alt="Logo" />

        <ul>
          <li>
            <Link to="/">Portabilidade</Link>
          </li>
          <li>
            <Link to="/"> 2° Via de conta</Link>
          </li>
        </ul>
      </Menu>
    </>
  );
}

export default Header;
