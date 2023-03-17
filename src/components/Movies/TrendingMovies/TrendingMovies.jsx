import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TrendingMoviesList from './TrendingMoviesList/TrendingMoviesList';
import { getAllMovies } from 'shared/services/movies-api';
import Loader from 'shared/components/Loader/Loader';

import css from '../TrendingMovies/TrendingMovies.module.css';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      // if (movies.length !== 0) {
      //   return;
      // }
      try {
        setLoading(true);
        const results = await getAllMovies();
        setMovies(results);
      } catch ({ response }) {
        setError(response.data.mesage);
        toast(`${response.data.mesage}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies]);

  return (
    <div>
      <h1 className={css.header}>Trending today</h1>
      {error && <p className="">{error}</p>}
      {loading && <Loader />}
      {movies && <TrendingMoviesList movies={movies} />}
      {error && <ToastContainer />}
    </div>
  );
};

export default TrendingMovies;
