import PropTypes from 'prop-types';
import { useState } from 'react';

import { FcSearch } from 'react-icons/fc';

import css from './MovieSearchForm.module.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => setSearch(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm__button}>
          <span className={css.SearchForm__button__label}>Search</span>
          <FcSearch />
        </button>

        <input
          className={css.SearchForm__input}
          name="search"
          type="text"
          value={search}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          required
        />
      </form>
    </header>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
