import React, { Component } from 'react';

import './search.scss';

class Search extends Component {
  state = { search: '', type: 'all' };

  handleKeydown = e => {
    if (e.key === 'Enter') this.props.searchMovies(this.state.search);
  };

  handleFilter = e => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            value={this.state.search}
            id='first_name2'
            type='text'
            className='validate'
            onChange={e => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKeydown}
          />
          <label className='active'>Search</label>
          <button
            className='btn search-btn'
            onClick={() => {
              if (this.state.search !== '')
                this.props.searchMovies(this.state.search);
            }}
          >
            Search
          </button>
        </div>
        <div className='radio-input'>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='all'
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}
export { Search };
