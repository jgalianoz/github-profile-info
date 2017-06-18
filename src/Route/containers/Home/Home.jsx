import React, { Component } from 'react';

import api from '../../../api.js';

import './Home.css';

import Search from '../../../Components/Shared/Search/Search';
import User from '../../../Components/User/User';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      result: null,
    };
    this.initialFetch = this.initialFetch.bind(this);
    this.textInput = this.textInput.bind(this);
  }

  async initialFetch(ev, users) {
    ev.preventDefault();
    this.props.history.push(`/#search=${this.state.query}`)
    const user = await api.users.listUser(this.state.query);
    this.showUser(user)
  }

  showUser(usersData) {
    const el = <User { ...usersData } />;
    this.setState({
      result: el,
    });
  }

  textInput(input) {
    const query = input.target.value
    this.setState({
      query
    })
  }

  render() {
    return (
      <section className="container-app">
        <div className="banner">
          <h2>
            Find the profile you want
          </h2>
        </div>
        <div className="Wrapper">
          <Search
            textValue={this.textInput}
            initialFetch={this.initialFetch} />
          {
            this.state.result
          }
        </div>
      </section>
    );
  }
}

export default Home;
