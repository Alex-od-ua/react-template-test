import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import css from './TextField.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        className={css.input}
        id={id}
        onChange={handleChange}
        {...props}
      ></input>
    </div>
  );
};

export default TextField;
