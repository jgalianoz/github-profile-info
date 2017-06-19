import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

import api from '../../../api.js';

import Repository from '../../../Components/Repository/Repository';
import Loading from '../../../Components/Shared/Loading/Loading';

class Repositorys extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
      page: 1,
      loading: true,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
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

  handlePageChange(newpage) {
    this.setState({ page: newpage })
  }

  render() {

    if( this.state.loading ) {
      return(
        <Loading />
      );
    }
    const limit = 10;

    const Lasttodo = this.state.page * limit;
    const FirstTodo = Lasttodo - limit

    const repos = this.state.repositories.slice(FirstTodo, Lasttodo);

    return(
      <section className="container-repos">
        {repos
          .map(repo => {
            return(
              <Repository key={repo.id} data={repo}/>
            );
          })
        }
        <Pagination
          activePage={this.state.page}
          itemsCountPerPage={limit}
          totalItemsCount={this.state.repositories.length}
          onChange={this.handlePageChange}
        />

      </section>
    );
  }
}

export default Repositorys;
