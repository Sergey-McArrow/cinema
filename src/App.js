import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from './components/Main/Main';
import { MoviePage } from './components/MoviePage/MoviePage';

function App() {
  const { movies, setMovies } = useState([]);
  const getMovies = movies => setMovies(movies);

  return (
    <>
      <Routes>
        <Route path='/cinema' element={<Main getMovies={getMovies} />} />
        <Route path='/movie/:id' element={<MoviePage movies={movies} />} />
      </Routes>
    </>
  );
}

export default App;
