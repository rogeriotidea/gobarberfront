import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './route';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';
import ForgotPassword from '../pages/forgotpassword';
import ResetPassword from '../pages/resetpassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset_password" component={ResetPassword} />
    <Route path="/dashboard" isPrivate component={Dashboard} />
    <Route path="/profile" isPrivate component={Profile} />
  </Switch>
);

export default Routes;
