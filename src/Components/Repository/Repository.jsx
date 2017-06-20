import React from 'react';

import './Repository.css';

import Lenguajes from '../../utils/lenguajes.js';

function Repository(props) {

  let images;
  let element;
  for(var item in Lenguajes) {
    images = Lenguajes[item];
    if (images.name === props.data.language) {
      element = (
        <img src={`${images.url}`} width="80" alt={`${images.name}`} />
      );
    }
  }

  return(
    <div className="Repository">
      <figure>
        {element}
      </figure>
      <div className="Repository-data">
        <a href={props.data.svn_url}>
          <h3 className="Repository-data-title">{ props.data.name }</h3>
        </a>
        <p>
          {props.data.description}
        </p>
      </div>
    </div>
  );
}

export default Repository;
