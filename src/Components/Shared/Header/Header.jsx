import React from 'react';

import './Header.css';

function Header () {

  function ToggelSearch() {
    const search = document.getElementById('search');
    search.classList.remove('search-inactive');
  }

  return(
    <header className="header">
      <h1 className="header-title">
        Github Info Profile
      </h1>
      <span className="search" onClick={ToggelSearch}>
        <i className="material-icons">search</i>
      </span>
    </header>
  );
}

export default Header;
