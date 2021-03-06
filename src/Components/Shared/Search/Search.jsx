import React from 'react';

import './Search.css';

function Search (props) {

  return(
    <div id="search" className="container-search">
      <div className="container-title">
        <h3 className="title-search">
          <i className="material-icons">search</i>
          Buscador
        </h3>
        <span className="close" onClick={props.CloseSearch}>
          <i className="material-icons">close</i>
        </span>
      </div>
      <form onSubmit={props.initialFetch} >
        <input
          id="texto"
          type="search"
          autoComplete="off"
          placeholder="Search GitHub"
          onChange={props.textValue}/>
      </form>
    </div>
  );
}

export default Search;
