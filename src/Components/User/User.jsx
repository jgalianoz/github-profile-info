import React from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';

import './User.css';

import Repositorys from '../../Route/containers/Repositories/Repositorys';

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
        <a href={props.html_url} target="_blank" rel="noopener noreferrer">
          <figure className="userInfo-avatar">
            <img
              src={`${props.avatar_url}`}
              width="200"
              height="200"
              alt={`${props.login}`} />
          </figure>
        </a>
        <div className="contDatos">
          <h3 className="contDatos-title">{props.name}</h3>
          <a
            href={props.html_url}
            className="contDatos-username"
            rel="noopener noreferrer"
            target="_blank">
              {props.login}
          </a>
          {
            props.location ? <address className="contDatos-address">
              <i className="material-icons">location_on</i>
              {
                props.location
              }
            </address> : null
          }
        </div>

        <div className="container-Tabs">
          <Tabs>

            <TabList className="TabList">
              <Tab className="TabList-link">Repositories</Tab>
              <Tab className="TabList-link">Followers</Tab>
              <Tab className="TabList-link">Following</Tab>
            </TabList>

            <TabPanel>
              <Repositorys repos={props.repos} />
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
