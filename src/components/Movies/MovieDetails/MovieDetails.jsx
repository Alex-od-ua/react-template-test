import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieById } from 'shared/services/movies-api';
import MovieDetailsList from './MovieDetailsList/MovieDetailsList';
import Loader from 'shared/components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      if (movie.length !== 0) {
        return;
      }
      try {
        setLoading(true);
        const result = await getMovieById(movieId);
        setMovie(result);
        setGenres(result.genres);
      } catch ({ response }) {
        setError(response.data.mesage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId, movie]);

  return (
    <>
      {error && <p className="">{error}</p>}
      {loading && <Loader />}
      {movie && <MovieDetailsList details={movie} genres={genres} />}
    </>
  );
};

export default MovieDetails;
