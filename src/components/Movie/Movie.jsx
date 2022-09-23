import * as React from 'react';
import { Link } from 'react-router-dom';

import './movie.scss';

const Movie = props => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className='card movie'>
      <div className='card-image waves-effect waves-block waves-light'>
        <Link to={`/movie/${id}`}>
          {poster === 'N/A' ? (
            <img
              className='activator'
              src={`https://via.placeholder.com/300x400?text=${title}`}
              alt={title}
            />
          ) : (
            <img className='activator' src={poster} alt={title} />
          )}
        </Link>
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
        </span>
        <p>
          {year} <span>{type}</span>
        </p>
        <div className='buttons'>
          <button
            className='btn btn-info
            waves-effect waves-light btn modal-trigger'
            href='#modal2'
            onClick={() => props.showMoreInfo(props)}
          >
            More info
          </button>
          <button
            className='btn btn-add'
            onClick={() => props.addFavorite(props)}
          >
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export { Movie };
