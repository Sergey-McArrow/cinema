import React, { useState } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MovieTwoToneIcon from '@mui/icons-material/MovieTwoTone';
import { Favorite } from '../Favorite/Favorite';
import './header.scss';
import { AppBar, Box, Button, Typography, useMediaQuery } from '@mui/material';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';

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
          removeFavorite={props.removeFavorite}
        />
      )
    );
  };

  const matches = useMediaQuery('(min-width:700px)');

  return (
    <AppBar
      sx={{
        position: 'static',
        flexDirection: `${matches ? 'row' : 'column'}`,
        justifyContent: 'space-around',
        background: '#cfd8dc',
        alignItems: 'center',
      }}
    >
      <Button
        variant='text'
        href='https://github.com/Sergey-McArrow/cinema'
        target='_blank'
        rel='noreferrer'
        sx={{ m: 1 }}
      >
        <MovieTwoToneIcon />
        <Typography sx={{ color: '#263238', m: 1 }} variant='h4'>
          Cinema
        </Typography>
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant='contained'
          sx={{
            background: '#2bbbad',
            m: 1,
            minWidth: '157px',
          }}
          onClick={() => setOpenFavorite((favoriteOpen = !favoriteOpen))}
        >
          <FavoriteBorderIcon />
          <Typography sx={{ mr: 1 }}>Favorite</Typography>
          <BadgeUnstyled badgeContent={props.favorite.length} />
        </Button>
        <Button
          variant='contained'
          sx={{ background: '#2bbbad', m: 1, minWidth: '157px' }}
          href='https://send.monobank.ua/8NMUeoTYQV'
          target='_blank'
          rel='noreferrer'
        >
          <VolunteerActivismIcon />
          <Typography> Help Ukraine</Typography>
        </Button>

        <div className='favorite'>{openModal()}</div>
      </Box>
    </AppBar>
  );
};

export { Header };
