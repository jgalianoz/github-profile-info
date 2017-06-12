import React, { Component } from 'react';

import api from '../../api.js';

import Search from '../../Components/Shared/Search/Search';
import User from '../../Components/User/User';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      user: {},
    };
    this.initialFetch = this.initialFetch.bind(this);
    this.textInput = this.textInput.bind(this);
  }

  async initialFetch(ev, users) {
    ev.preventDefault();

    const user = await api.users.listUser(this.state.query);
    this.setState({
      user,
    })
  }

  textInput(input) {
    const query = input.target.value
    this.setState({
      query
    })
  }

  render() {
    return (
      <section>
        <Search
          textValue={this.textInput}
          initialFetch={this.initialFetch} />
        <User { ...this.state.user } />
      </section>
    );
  }
}

export default Home;
