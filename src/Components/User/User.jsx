import React from 'react';

function User (props) {

  if ( props.message ) {
    console.log(props.message);
  }

  return(
    <p>
      { props.name }
    </p>
  );
}

export default User;
