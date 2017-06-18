import React, { Component } from 'react';

import api from '../../../api.js';

import Loading from '../../../Components/Shared/Loading/Loading';

class Repository extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const repositories = await api.repository.listRepos(this.props.user);
    this.setState({
      repositories,
      loading: false,
    })
  }

  render() {

    if( this.state.loading ) {
      return(
        <Loading />
      );
    }

    return(
      <div>
        {this.state.repositories
          .map(item => {
              console.log(item)
          })
        }
      </div>
    );
  }
}

export default Repository;
