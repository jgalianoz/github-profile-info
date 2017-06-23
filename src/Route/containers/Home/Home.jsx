import React, { Component } from 'react';

import api from '../../../utils/api.js';

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

  async initialFetch(ev) {
    ev.preventDefault();
    this.props.history.push(`/#search=${this.state.query}`)

    const [
      user,
      repositories,
      followers,
      following,
    ] = await Promise.all([
      api.users.listUser(this.state.query),
      api.repository.listRepos(this.state.query),
      api.followers.listFollowers(this.state.query),
      api.following.listFollowings(this.state.query),
    ]);
    this.showUser(user, repositories, followers, following);
  }

  showUser(user, repos, followers, following) {
    const el = <User
      {...user}
      repos={repos}
      followers={followers}
      following={following} />;

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
