import PropTypes from 'prop-types';

import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

import { useCallback } from 'react';

import css from './MovieDetailsList.module.css';

const MovieDetailsList = ({ details, genres }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  // const onGoBackButtonClick = () => navigate(from);

  const onGoBackButtonClick = useCallback(() => {
    navigate(from);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { poster_path, original_title, vote_average, overview, release_date } =
    details;

  const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);

  let year = new Date(release_date).getFullYear();

  return (
    <>
      <div>
        <button
          type="button"
          onClick={onGoBackButtonClick}
          className={css.button}
        >
          Go back
        </button>
      </div>
      <div className={css.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title ? original_title : 'picture not found'}
          loading="lazy"
          className={css.img}
          width="300px"
          height="450px"
        />
        <div className={css.info}>
          <h2 className={css.title}>
            {original_title ? original_title : 'Title not found'}
            <span>({year ? year : '-'})</span>
          </h2>
          <p>
            User score:{' '}
            {vote_average ? ((vote_average / 10) * 100).toFixed(0) : 0}%
          </p>
          <h3 className={css.overview}>Overview</h3>
          <p className={css.overviewInfo}>{overview}</p>
          <h3 className={css.genres}>Genres</h3>
          <ul className={css.list}>{elements}</ul>
        </div>
      </div>
      <div>
        <h3 className={css.additionalInfo}>Additional information</h3>

        <ul>
          <li className={css.additionalInfoList}>
            <Link to="cast" state={{ from }} className={css.additionalInfoLink}>
              Cast
            </Link>
          </li>

          <li className={css.additionalInfoList}>
            <Link
              to="reviews"
              state={{ from }}
              className={css.additionalInfoLink}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsList;

MovieDetailsList.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  release_date: PropTypes.string,

  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
