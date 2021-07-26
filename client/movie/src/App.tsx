import React from 'react';
import ModalView from './components/Modal/ModalView';
import PopularMovies from './components/MovieView/MoviesToShow';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <>
    <SearchBar />
    <PopularMovies />
    </>
  );
}

export default App;
