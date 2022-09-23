import { Routes, Route } from 'react-router-dom';

import { Main } from './components/Main/Main';
import { MoviePage } from './components/MoviePage/MoviePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/cinema' element={<Main />} />
        <Route path='/movie/:id' element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
