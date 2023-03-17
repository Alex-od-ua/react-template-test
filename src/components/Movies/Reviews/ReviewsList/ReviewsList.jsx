import PropTypes from 'prop-types';

import css from './ReviewsList.module.css';

const ReviewsList = ({ movies }) => {
  const element = movies.map(({ content, id, author }) => (
    <li key={id} className={css.item}>
      <h2 className={css.title}>{author}</h2>
      <p>{content}</p>
    </li>
  ));
  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.item}>{element}</ul>
      </div>
    </>
  );
};

ReviewsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewsList;
