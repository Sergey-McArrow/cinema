import React, { Component } from 'react';

import './main.scss';
import { Movies } from '../Movies/Movies';
import { Search } from '../Search/Search';
import { Preloader } from '../Preloader/Preloader';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { InfoModal } from '../InfoModal/InfoModal';
import { Container } from '@mui/material';
import { getStartScreenData } from '../../api';

const API_KEY = '1d717560';
// process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
    favorite: [],
    info: '',
    showInfo: false,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.Search, loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  addFavorite = item => {
    this.setState({
      favorite: [...this.state.favorite, item],
    });
  };

  getMoreInfo = item => {
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${item.imdbID}&plot=full
      `
    )
      .then(response => response.json())
      .then(data => this.setState({ info: data.Plot, loading: false }))
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };
  handleClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  showMoreInfo = item => {
    this.getMoreInfo(item);
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { movies, loading, showInfo } = this.state;
    return (
      <>
        {showInfo && (
          <InfoModal
            info={this.state.info}
            isClicked={this.handleClick}
            isShowing={showInfo}
            isLoading={loading}
          />
        )}
        <Header favorite={this.state.favorite} />
        <Container>
          <Search searchMovies={this.searchMovies} />
          {loading ? (
            <Preloader />
          ) : (
            <Movies
              movies={movies}
              addFavorite={this.addFavorite}
              showMoreInfo={this.showMoreInfo}
            />
          )}
        </Container>
        <Footer />
      </>
    );
  }
}

export { Main };
