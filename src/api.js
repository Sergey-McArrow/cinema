const API_KEY = process.env.REACT_APP_KEY;

const getStartScreenData = async (str = 'matrix') => {
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.error(err);
    });
  return data;
};

const getFullInfo = async id => {
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full
    `
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.error(err);
    });
  return data;
};

const movieSearch = async (str, type) => {
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
      type !== 'all' ? `&type=${type}` : ''
    }`
  )
    .then(response => response.json())
    .then(data => data)
    .catch(err => {
      console.error(err);
    });
  return data;
};

const fetchMoreInfo = async id => {
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full
    `
  )
    .then(response => response.json())
    .then(data => data)
    .catch(err => {
      console.error(err);
    });
  return data;
};

export { getStartScreenData, getFullInfo, movieSearch, fetchMoreInfo };
