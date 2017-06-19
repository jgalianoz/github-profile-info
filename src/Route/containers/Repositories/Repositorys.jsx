import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

import api from '../../../utils/api.js';

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

    const limit = 5;
    const secundary = this.state.page * limit;
    const initial = secundary - limit
    const repos = this.state.repositories.slice(initial, secundary);

    return(
      <section className="container-repos">
        {repos
          .map(repo => {
            return(
              <Repository key={repo.id} data={repo}/>
            );
          })
        }

        <div className="container-pagination">
          <Pagination
            activePage={this.state.page}
            itemsCountPerPage={limit}
            totalItemsCount={this.state.repositories.length}
            onChange={this.handlePageChange}
          />
        </div>

      </section>
    );
  }
}

export default Repositorys;
