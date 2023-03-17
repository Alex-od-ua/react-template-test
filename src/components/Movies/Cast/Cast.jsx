import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getCasts } from 'shared/services/movies-api';
import CastList from './CastList/CastList';
import Loader from 'shared/components/Loader/Loader';

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      // if (movie.length !== 0) {
      //   return;
      // }
      try {
        setLoading(true);
        const result = await getCasts(movieId);
        setMovie(result);

        if (result.length === 0) {
          toast('Sorry, cast not found');
        }
      } catch ({ response }) {
        setError(response.data.message);
        console.log(response.data.message);
        toast.error(`${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMovie]);

  return (
    <>
      {error && <p className="">{error}</p>}
      {loading && <Loader />}
      {movie && <CastList movies={movie} />}
      <ToastContainer />
    </>
  );
};

export default Cast;
