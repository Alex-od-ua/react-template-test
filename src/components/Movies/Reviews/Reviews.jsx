import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getReviews } from 'shared/services/movies-api';
import ReviewsList from './ReviewsList/ReviewsList';
import Loader from 'shared/components/Loader/Loader';

const Reviews = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      if (movie.length !== 0) {
        return;
      }
      try {
        setLoading(true);
        const result = await getReviews(movieId);
        if (result.length === 0) {
          toast('Sorry, no reviews');
        }
        // console.log(result);
        setMovie(result);
      } catch ({ response }) {
        setError(response.data.message);
        console.log(response.data.message);
        toast.error(`${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movie.length, movieId]);

  return (
    <>
      {error && <p className="">{error}</p>}
      {loading && <Loader />}
      {movie && <ReviewsList movies={movie} />}
      <ToastContainer />
    </>
  );
};

export default Reviews;
