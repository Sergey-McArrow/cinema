import React from 'react';

import { FavoriteModal } from './FavoriteModal';
import './favorite.scss';

const Favorite = ({ isClicked, favorite }) => {
  const handleButtonClick = isOpen => {
    isClicked(!isOpen);
  };

  return (
    <div id='modal1' className='modal'>
      <div className='modal-content'>
        <h4>My favorite movies</h4>
        {Array.from(new Set(favorite)).map(fav => (
          <FavoriteModal key={fav.imdbID} favItem={fav} />
        ))}
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='waves-effect waves-green btn-flat'
          onClick={handleButtonClick}
        >
          Close X
        </a>
      </div>
    </div>
  );
};

export { Favorite };
