import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './movie.scss';

const Movie = props => {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <Card id={imdbID} className='card'>
      <CardMedia
        component='img'
        height='140'
        image={Poster}
        alt={Title}
        id='card-image'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {Title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {Year}
          <span className='right type'> {Type}</span>
        </Typography>
      </CardContent>
      <CardActions className='button-container'>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export { Movie };
