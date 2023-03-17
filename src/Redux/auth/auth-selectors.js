export const isUserLogin = ({ auth }) => auth.isLogin; //= store => store.auth.isLogin;

export const getUserName = ({ auth }) => auth.user; //= store => store.auth.user;

export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
