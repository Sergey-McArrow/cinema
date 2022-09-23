import React, { Component } from 'react';
import * as _ from 'lodash';

import './main.scss';
import { Movies } from '../Movies/Movies';
import { Search } from '../Search/Search';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { InfoModal } from '../InfoModal/InfoModal';
import { Container, LinearProgress } from '@mui/material';
import { fetchMoreInfo, getStartScreenData, movieSearch } from '../../api';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
      loadingInfo: true,
      favorite: [],
      info: '',
      showInfo: false,
      searchStr: this.props.str,
    };
  }

  componentDidMount() {
    const favorites = localStorage.getItem('favorite');
    favorites !== null && this.setState({ favorite: JSON.parse(favorites) });
    const search = localStorage.getItem('search');
    search !== null && this.setState({ searchStr: search });
    getStartScreenData(this.state.searchStr || 'matrix')
      .then(data => {
        this.setState({
          movies: data.Search,
          loading: false,
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  componentDidUpdate() {
    localStorage.setItem('favorite', JSON.stringify(this.state.favorite));
    console.log();
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    movieSearch(str, type)
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
    this.setState({ info: '', loadingInfo: true });
    fetchMoreInfo(imdbID)
      .then(data => this.setState({ info: data.Plot, loadingInfo: false }))
      .catch(err => {
        console.error(err);
        this.setState({ loadingInfo: false });
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
    const { movies, loading, showInfo, loadingInfo } = this.state;

    return (
      <>
        {showInfo && (
          <InfoModal
            info={this.state.info}
            isClicked={this.handleClick}
            isShowing={showInfo}
            isLoading={loadingInfo}
          />
        )}
        <Header
          favorite={this.state.favorite}
          removeFavorite={this.removeFavorite}
        />
        <Container>
          <Search
            searchMovies={this.searchMovies}
            searchStr={this.state.searchStr}
          />
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
