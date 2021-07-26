import { useState } from 'react';
import Modal from 'react-modal';
import { MovieType } from '../Types/MovieType';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type Props = {
  movie: MovieType;
  modalIsOpen: boolean;
  closeModal: () => void;

} 



const ModalView = (props: Props) => {
  const { movie, modalIsOpen, closeModal } = props;
  
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >{movie.Title}</h2>
        <button onClick={closeModal}>close</button>
        <p>{movie.Plot}</p>
        <p>Tags: {movie.Genre}</p>
        <p>Time: {movie.Runtime}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Released: {movie.Released}</p>
        <p>Rating: {movie.imdbRating} ★</p>
      </Modal>
    </div>
  );
}


export default ModalView;