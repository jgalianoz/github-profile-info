import React from 'react';

import './Repository.css';

function Repository(props) {
  return(
    <div className="Repository">
      <h3>{ props.data.name }</h3>
    </div>
  );
}

export default Repository;
