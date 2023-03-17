import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '5bbf892bcd99762773ec3ce2eced7cd4',
  },
});

export const searchMovies = async query => {
  const { data } = await instance.get('/search/movie?', {
    params: {
      query,
    },
  });

  return data.results;
};

export const getAllMovies = async (page = 1) => {
  const { data } = await instance.get('/trending/all/day?', {
    params: {
      page,
    },
  });
  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}?`);

  return data;
};

export const getCasts = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits?`);
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}//reviews?`);
  return data.results;
};

// api key: 5bbf892bcd99762773ec3ce2eced7cd4

//https://api.themoviedb.org/3/movie/550?api_key=5bbf892bcd99762773ec3ce2eced7cd4
