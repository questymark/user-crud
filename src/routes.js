import React from 'react';
import { Route, IndexRoute }  from 'react-router';

import App from 'components/App';
import MainPage from 'components/MainPage';
import UsersPage from 'components/Users';
import UserCard from 'components/Users/UserCard'
import UserForm from 'components/Users/UserForm'

export default (
  <Route component={App} path='/'>
    <IndexRoute component={MainPage} />
    <Route component={UsersPage} path='users' />
    <Route component={UserForm} path='users/:userId' />
    <Route component={UserForm} path='users/new' />
  </Route>
);