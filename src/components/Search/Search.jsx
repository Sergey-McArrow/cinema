import React, { Component } from 'react';

import './search.scss';
import { Container } from '@mui/material';

class Search extends Component {
  state = { search: 'matrix', type: 'all' };

  handleKeydown = e => {
    if (e.key === 'Enter')
      this.props.searchMovies(this.state.search, this.state.type);
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
      <Container sx={{ width: '80%' }}>
        <div className='row'>
          <div className='input-field'>
            <input
              value={this.state.search}
              type='text'
              className='validate white-text'
              onChange={e => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKeydown}
            />
            <label className='active white-text'>Search</label>
            <button
              className='btn search-btn'
              onClick={() => {
                if (this.state.search !== '')
                  this.props.searchMovies(this.state.search, this.state.type);
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
      </Container>
    );
  }
}
export { Search };
