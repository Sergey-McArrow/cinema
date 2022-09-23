import { Close } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteModal = ({ favItem, removeFavorite }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to={`/movie/${favItem.imdbID}`}>
        <Typography sx={{ pt: 1.5 }}>{favItem.Title}</Typography>
      </Link>
      <Close onClick={() => removeFavorite(favItem)} />
    </Box>
  );
};
export { FavoriteModal };
