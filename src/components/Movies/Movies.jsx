import { Movie } from '../Movie/Movie';
import './movies.scss';

const Movies = props => {
  const { movies = [], addFavorite, showMoreInfo } = props;
  return (
    <div className='movies'>
      {movies.length ? (
        movies.map(movie => (
          <Movie
            key={movie.imdbID}
            {...movie}
            item={movie}
            addFavorite={addFavorite}
            showMoreInfo={showMoreInfo}
          />
        ))
      ) : (
        <h4 style={{ color: 'white' }}>Nothing found</h4>
      )}
    </div>
  );
};

export { Movies };
