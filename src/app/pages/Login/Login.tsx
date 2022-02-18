import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const signIn = () => {
    navigate('signin');
  };
  const signUp = () => {
    navigate('signup');
  };

  return (
    <div>
      <button onClick={() => signIn()}>SignIn</button>
      <button onClick={() => signUp()}>SignUp</button>
      <Outlet />
    </div>
  );
};

export default Login;
