import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Close } from '@mui/icons-material';
import { ClickAwayListener } from '@mui/material';
import { Preloader } from '../Preloader/Preloader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const InfoModal = ({ isClicked, info, isShowing, loading, clearInfo }) => {
  const handleButtonClick = isOpen => {
    isClicked(!isOpen);
  };
  const handleClickAway = () => {
    isClicked(false);
  };

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
              <Preloader />
            ) : (
              <Box sx={style}>
                <Close onClick={handleButtonClick} style={{ float: 'right' }} />
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  More info
                </Typography>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
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
