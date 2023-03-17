import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import css from './MovieSearchList.module.css';

const MovieSearchList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ title, id }) => (
    <li key={id} className={css.item}>
      <Link
        className={css.link}
        state={{ from: location }}
        to={`/movies/${id}`}
      >
        {title}
      </Link>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default MovieSearchList;

MovieSearchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
