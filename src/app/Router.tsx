import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';

const SignIn = React.lazy(() => import('./pages/Login/Signin/SignIn'));
const SignUp = React.lazy(() => import('./pages/Login/Signup/SignUp'));

const Router = (): JSX.Element => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route
            path="signin"
            element={
              <React.Suspense fallback={<></>}>
                <SignIn />
              </React.Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <React.Suspense fallback={<></>}>
                <SignUp />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default Router;
