import React, { useState } from 'react';
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
          <a href='#!' className='brand-logo blue-grey-text text-darken-5'>
            Cinema
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a
                href='#modal1'
                onClick={() => setOpenFavorite((favoriteOpen = !favoriteOpen))}
                className={`waves-effect waves-light btn modal-trigger ${
                  favoriteOpen && '.modal-close'
                }`}
              >
                Favorite
              </a>
            </li>
            <li>
              <a
                className='waves-effect waves-light btn modal-trigger'
                href='https://send.monobank.ua/8NMUeoTYQV'
              >
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
