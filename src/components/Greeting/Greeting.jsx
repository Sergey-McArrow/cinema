import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  useMediaQuery,
} from '@mui/material';

const Greeting = ({ getInput }) => {
  const [input, setInput] = useState('');

  const matches = useMediaQuery('(min-width:700px)');

  return (
    <>
      <Container>
        <Box
          sx={{
            color: '#37474f',
            m: 1,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70vw',
            background: '#eceff1',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: ' center',
          }}
        >
          <DialogTitle
            variant='h3'
            sx={{
              m: 10,
              textAlign: 'center',
              fontSize: `${!matches && '2rem'}`,
            }}
          >
            Greetings!
            <br /> Here you can receive information about movies and series!
          </DialogTitle>
          <DialogContent>
            <DialogContentText color='info' variant='h5' sx={{ mb: 3 }}>
              Enter below title of your favorite movie or series?
            </DialogContentText>
            <input
              sx={{ width: '100%', pl: 1, border: 'none' }}
              placeholder='ENTER TITLE'
              label='ENTER TITLE'
              variant='standard'
              value={input}
              onChange={e => {
                setInput(e.target.value);
                getInput(e.target.value);
              }}
              onKeyDown={e => e.key === 'Enter' && redirect('/cinema')}
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <Link to='/cinema'>
              <Button sx={{ mb: 2 }} variant='contained'>
                Search
              </Button>
            </Link>
          </DialogActions>
          <Typography>*default value is Matrix</Typography>
        </Box>
      </Container>
    </>
  );
};
export { Greeting };
