import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './Home/Home';

import Header from '../../Components/Shared/Header/Header';

function Page () {
  return(
    <section>
      <Header/>
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    </section>
  );
}

export default Page;
