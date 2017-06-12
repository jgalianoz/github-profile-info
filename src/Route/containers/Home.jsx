import React, { Component } from 'react';

import api from '../../api.js';

import Header from '../../Components/Shared/Header/Header';
import Search from '../../Components/Shared/Search/Search';
import User from '../../Components/User/User';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch(){
    const user = await api.users.listUser();
    this.setState({
      user,
    })
  }

  textInput(input) {
    console.log(input.target.value);
  }

  render() {
    return (
      <section>
        <Header/>
        <Search textValue={this.textInput}/>
        <User />
      </section>
    );
  }
}

export default Home;
