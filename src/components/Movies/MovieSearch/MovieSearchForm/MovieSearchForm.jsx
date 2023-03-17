import PropTypes from 'prop-types';
import { useState } from 'react';

import css from './MovieSearchForm.module.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => setSearch(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="search"
        value={search}
        required
        placeholder="Search movie"
        className={css.input}
        onChange={handleChange}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
