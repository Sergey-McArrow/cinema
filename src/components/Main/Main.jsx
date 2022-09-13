import React, { Component } from 'react';

import { Movies } from '../Movies/Movies';
import { Search } from '../Search/Search';
import './main.scss';

const API_KEY = '1d717560';
// process.env.REACT_APP_API_KEY;
const requestAdress = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=`;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(requestAdress + 'iron')
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.Search, loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  //TODO: fix type search
  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(`${requestAdress}${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <div className='main-container container'>
        <Search searchMovies={this.searchMovies} />
        {!loading ? <Movies movies={movies} /> : <h2>Loading...</h2>}
      </div>
    );
  }
}

export default Main;
