import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Greeting } from './components/Greeting/Greeting';
import { Main } from './components/Main/Main';
import { MoviePage } from './components/MoviePage/MoviePage';

function App() {
  const [input, getInput] = useState('');
  return (
    <Routes>
      <Route path='/' element={<Greeting getInput={getInput} />} />
      <Route path='/cinema' element={<Main str={input} />} />
      <Route path='/movie/:id' element={<MoviePage />} />
    </Routes>
  );
}

export default App;
