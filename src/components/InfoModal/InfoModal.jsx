import React from 'react';
import { Close } from '@mui/icons-material';
import {
  Box,
  Typography,
  Modal,
  ClickAwayListener,
  LinearProgress,
  useMediaQuery,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '12px',
  p: 2,
};

const InfoModal = ({ isClicked, info, isShowing, loading, clearInfo }) => {
  const handleButtonClick = isOpen => {
    isClicked(!isOpen);
  };
  const handleClickAway = () => {
    isClicked(false);
  };
  const matches = useMediaQuery('(min-width:700px)');

  return (
    <Modal
      open={isShowing}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <>
        <ClickAwayListener onClickAway={handleClickAway}>
          {isShowing &&
            (loading ? (
              <LinearProgress />
            ) : (
              <Box sx={style}>
                <Close onClick={handleButtonClick} style={{ float: 'right' }} />
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  More info
                </Typography>
                <Typography
                  id='modal-modal-description'
                  sx={{ mt: 2, fontSize: `${matches ? '1.5rem' : '.7rem'}` }}
                >
                  {info}
                </Typography>
              </Box>
            ))}
        </ClickAwayListener>
      </>
    </Modal>
  );
};

export { InfoModal };
