import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  ImageListItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { getFullInfo } from '../../api';
import { Box } from '@mui/system';

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getFullInfo(id)
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  const matches = useMediaQuery('(min-width:700px)');
  const { Title, Actors, Awards, Country, Genre, Plot, Poster } = movie;

  return (
    <>
      {movie && (
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: '#eceff1 ',
          }}
        >
          <Link to={'/cinema'}>
            <Button
              variant='contained'
              sx={{ float: 'right', mt: 3, background: '#2bbbad' }}
            >
              HOME
            </Button>
          </Link>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: `${matches ? 'row' : 'column'}`,
            }}
          >
            <ImageListItem sx={{ borderRadius: '15px', mt: 3, ml: 5, flex: 2 }}>
              <img src={Poster} alt={Title} />
            </ImageListItem>
            <Divider sx={{ mt: 2 }} />
            <Box sx={{ flex: 3, ml: 4 }}>
              <Typography sx={{ mb: 4 }} variant='h2'>
                {Title}
              </Typography>
              <Typography variant='h5' sx={{ mt: 1 }}>
                Actors: {Actors}
              </Typography>
              <Typography variant='h5' sx={{ mt: 1 }}>
                Awards: {Awards}
              </Typography>
              <Typography variant='h5' sx={{ mt: 1 }}>
                Country: {Country}
              </Typography>
              <Typography variant='h5' sx={{ mt: 1 }}>
                Genre: {Genre}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box>
            <Typography variant='h4' sx={{ m: 4 }}>
              Description: {Plot}
            </Typography>
          </Box>
        </Container>
      )}
    </>
  );
};

export { MoviePage };
