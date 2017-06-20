import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

import Repository from '../../../Components/Repository/Repository';

class Repositorys extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      loading: true,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(newpage) {
    this.setState({ page: newpage })
  }

  render() {

    const limit = 5;
    const secundary = this.state.page * limit;
    const initial = secundary - limit
    const repos = this.props.repos.slice(initial, secundary);

    return(
      <section className="container-repos">

        {repos
          .map(repo => {
            return(
              <Repository key={repo.id} data={repo}/>
            );
          })
        }

        {
          this.props.repos.length ? <div className="container-pagination">
            <Pagination
              activePage={this.state.page}
              itemsCountPerPage={limit}
              totalItemsCount={this.props.repos.length}
              onChange={this.handlePageChange}
            />
          </div> : null
        }

      </section>
    );
  }
}

export default Repositorys;
