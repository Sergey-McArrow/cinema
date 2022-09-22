const API_KEY = '1d717560';

const getStartScreenData = async () => {
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.error(err);
    });
  return data;
};

const getFullInfo = async id => {
  console.log(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full
  `);
  const data = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full
    `
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.error(err);
    });
  // console.log(data);
  return data;
};

export { getStartScreenData, getFullInfo };
