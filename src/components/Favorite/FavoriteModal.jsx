import { Close } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

const FavoriteModal = ({ favItem, removeFavorite }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ pt: 1.5 }}>{favItem.Title}</Typography>
      <Close onClick={() => removeFavorite(favItem)} />
    </Box>
  );
};
export { FavoriteModal };
