const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    placeholder: 'Name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'Email',
  },
  password: {
    type: 'tpasswordext',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'Password',
  },
};

export default fields;
