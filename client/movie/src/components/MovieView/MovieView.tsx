import React, { useState } from 'react';
import ModalView from '../Modal/ModalView';
import { MovieType } from '../Types/MovieType';

type Props = {
  movie: MovieType;
}

const MovieView = (props: Props) => {
  const  { movie } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true)
  }
  
  const closeModal = () => {
    setIsOpen(false)
  }
  
  return (
    <>
    <ModalView closeModal={closeModal} modalIsOpen={modalIsOpen} movie={movie} />
    <div style={{margin: 15, float: 'left'}}>
      <p style={{fontSize: 18, fontWeight: 'bold'}}>{movie.Title}</p>
      <img onClick={() =>openModal() } style={{maxWidth: 150, maxHeight: 200}} src={movie.Poster} />
    </div>
    </>
  );



}


export default MovieView;