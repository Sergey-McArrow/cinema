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
export { getStartScreenData };
