import PropTypes from 'prop-types';

import css from './CastList.module.css';
import tempImage from '../tempImage.png';

const CastList = ({ movies }) => {
  const element = movies.map(({ original_name, profile_path, id }) => (
    <li key={id}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w300/${profile_path}`
            : `${tempImage}`
        }
        alt={original_name}
        loading="lazy"
        width="150px"
      />
      <h3 className={css.title}>{original_name}</h3>
    </li>
  ));

  return (
    <>
      <div>
        <ul className={css.item}>{element}</ul>
      </div>
    </>
  );
};

export default CastList;

CastList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
