import Button from '@mui/material/Button';
import useForm from 'shared/hooks/useForm';

import initialState from './initialState';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
// import Button from 'shared/components/Button/Button';

import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
