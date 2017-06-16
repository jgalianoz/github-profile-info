import React from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';


import './User.css';

function User (props) {

  if ( props.message ) {
    return(
      <p>
        { props.message }
      </p>
    );
  }

  return(
    <section className="container-user" name="user">
      <div className="userInfo">
        <figure className="userInfo-avatar">
          <img
            src={`${props.avatar_url}`}
            width="200"
            height="200"
            alt={`${props.login}`} />
        </figure>
        <div className="contDatos">
          <h3 className="contDatos-title">{props.name}</h3>
          <a
            href={`${props.html_url}`}
            className="contDatos-username"
            rel="noopener noreferrer"
            target="_blank">
              {props.login}
          </a>
          <address className="contDatos-address">
            <i className="material-icons">location_on</i>
            {
              props.location
            }
          </address>
        </div>

        <div className="container-Tabs">
          <Tabs>

            <TabList className="TabList">
              <Tab>Repositories</Tab>
              <Tab>Followers</Tab>
              <Tab>Following</Tab>
            </TabList>

            <TabPanel>
              <h2>Repositories</h2>
            </TabPanel>

            <TabPanel>
              <h2>Followers</h2>
            </TabPanel>

            <TabPanel>
              <h2>Following</h2>
            </TabPanel>

          </Tabs>
        </div>

      </div>
    </section>
  );
}

export default User;
