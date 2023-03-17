import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import css from '../TrendingMovies.module.css';

const TrendingMoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ id, title, name }) => (
    <Link
      key={id}
      className={css.link}
      to={`/movies-finder/${id}`}
      state={{ from: location }}
    >
      <li className={css.item}>{title ? title : name}</li>
    </Link>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
    })
  ),
};

export default TrendingMoviesList;
