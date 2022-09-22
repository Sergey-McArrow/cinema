import React, { Component } from 'react';
import * as _ from 'lodash';

import './main.scss';
import { Movies } from '../Movies/Movies';
import { Search } from '../Search/Search';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { InfoModal } from '../InfoModal/InfoModal';
import { Container, LinearProgress } from '@mui/material';
import { getStartScreenData } from '../../api';

const API_KEY = '1d717560';
// process.env.REACT_APP_API_KEY;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
      favorite: [],
      info: '',
      showInfo: false,
    };
  }

  componentDidMount() {
    // fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ movies: data.Search, loading: false });
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     this.setState({ loading: false });
    //   });
    let data = getStartScreenData();
    data
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
      favorite: _.uniqBy([...this.state.favorite, item], 'imdbID'),
    });
  };

  removeFavorite = item => {
    this.setState({
      favorite: this.state.favorite.filter(f => f.imdbID !== item.imdbID),
    });
  };

  getMoreInfo = ({ imdbID }) => {
    this.setState({ info: '' });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full
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
        <Header
          favorite={this.state.favorite}
          removeFavorite={this.removeFavorite}
        />
        <Container>
          <Search searchMovies={this.searchMovies} />
          {loading ? (
            <LinearProgress />
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
