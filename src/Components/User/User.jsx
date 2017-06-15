import React from 'react';

function User (props) {

  if ( props.message ) {
    console.log(props.message);
  }

  return(
    <section name="user">
      <div className="userInfo">
        <figure className="userInfo-avatar">
          <img src={`${props.avatar_url}`} />
        </figure>
      </div>
    </section>
  );
}

export default User;
