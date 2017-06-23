import React from 'react';

import './Follow.css';

function Followers(props) {
  return(
    <div className="container-followers">
      <a href={props.html_url} target="_blank" rel="noopener noreferrer">
        <figure className="followers-avatar">
          <img src={props.avatar_url} width="70" alt={props.login} />
        </figure>
        <h3 className="followers-title">{ props.login }</h3>
      </a>
    </div>
  );
}

export default Followers;
