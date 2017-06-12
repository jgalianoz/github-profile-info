import React from 'react';


function Search (props) {
  return(
    <div role="Search">
      Buscador
      <span>
        X
      </span>
      <form onSubmit={props.initialFetch} >
        <input
          id="texto"
          type="search"
          onChange={props.textValue}/>
      </form>
    </div>
  );
}

export default Search;
