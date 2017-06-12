import React from 'react';

import { Open } from '../../../Helpers/Helpers.js'

import './Header.css';

function Header () {
  return(
    <header className="header">
      <h1 className="header-title">
        Github Info Profile
      </h1>
      <a href="#" onClick={Open}>Buscar</a>
    </header>
  );
}

export default Header;
