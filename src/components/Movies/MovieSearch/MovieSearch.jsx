import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { searchMovies } from 'shared/services/movies-api';
import MovieSearchForm from './MovieSearchForm/MovieSearchForm';
import MovieSearchList from './MovieSearchList/MovieSearchList';

import Loader from 'shared/components/Loader/Loader';

const MovieSearch = () => {
  const [movies, setMovies] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovies = async () => {
      if (!search) {
        return;
      }
      try {
        setLoading(true);
        const results = await searchMovies(search);
        setMovies(results);
      } catch ({ response }) {
        setError(response.data.message);
        console.log(response.data.message);
        toast.error(`${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onSearchMovies = search => {
    setSearchParams({ search });
  };

  return (
    <>
      {loading && <Loader />}
      {error && <h1>error</h1>}
      <MovieSearchForm onSubmit={onSearchMovies} />
      {movies && <MovieSearchList movies={movies} />}
      <ToastContainer />
    </>
  );
};

export default MovieSearch;
