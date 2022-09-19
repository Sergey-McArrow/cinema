import React, { useState } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MovieTwoToneIcon from '@mui/icons-material/MovieTwoTone';
import { Favorite } from '../Favorite/Favorite';
import './header.scss';

const Header = props => {
  let [favoriteOpen, setOpenFavorite] = useState(false);

  const handleClick = favoriteOpen => {
    setOpenFavorite(favoriteOpen);
  };

  const openModal = () => {
    return (
      favoriteOpen && (
        <Favorite
          favorite={props.favorite}
          isClicked={handleClick}
          isOpen={favoriteOpen}
        />
      )
    );
  };

  return (
    <div className='navbar-fixed'>
      <nav className='blue-grey lighten-4'>
        <div className='nav-wrapper'>
          <a
            href='https://github.com/Sergey-McArrow/cinema'
            className='brand-logo blue-grey-text text-darken-5'
            target='_blank'
            rel='noreferrer'
          >
            Cinema
            <MovieTwoToneIcon className='logo-icon' />
          </a>
          <ul className='right btn-container'>
            <li>
              <a
                href='#modal1'
                onClick={() => setOpenFavorite((favoriteOpen = !favoriteOpen))}
                className={`waves-effect waves-light btn modal-trigger btn-secondary ${
                  favoriteOpen && '.modal-close'
                }`}
              >
                <FavoriteBorderIcon />
                Favorite
              </a>
            </li>
            <li>
              <a
                className='waves-effect waves-light btn modal-trigger btn-secondary'
                href='https://send.monobank.ua/8NMUeoTYQV'
              >
                <VolunteerActivismIcon />
                Help Ukraine
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='favorite'>{openModal()}</div>
    </div>
  );
};

export { Header };
