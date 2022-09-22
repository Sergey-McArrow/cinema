import React from 'react';

import { FavoriteModal } from './FavoriteModal';
import './favorite.scss';
import {
  Box,
  ClickAwayListener,
  Divider,
  Modal,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
  display: 'block',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '3px',
  boxShadow: 24,
  p: 4,
};
const Favorite = ({ isClicked, favorite, removeFavorite, isOpen }) => {
  const handleButtonClick = isOpen => {
    isClicked(!isOpen);
  };
  const handleClickAway = () => {
    isClicked(false);
  };

  return (
    <Modal open={isOpen}>
      <>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box sx={style}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
            >
              <Typography variant='h6' sx={{ ml: 1 }}>
                My favorite movies
              </Typography>
              <Close sx={{ right: 0, top: 0 }} onClick={handleButtonClick} />
            </Box>
            <Divider />
            <Box sx={{ justifyContent: 'space-between', p: 2 }}>
              {favorite.map(fav => (
                <FavoriteModal
                  key={fav.imdbID || 1}
                  favItem={fav}
                  removeFavorite={removeFavorite}
                />
              ))}
            </Box>
          </Box>
        </ClickAwayListener>
      </>
    </Modal>
  );
};

export { Favorite };
