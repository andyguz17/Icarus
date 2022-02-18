import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import SignIn from './pages/Login/Signin/SignIn';
import SignUp from './pages/Login/Signup/SignUp';

const Router = (): JSX.Element => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default Router;
