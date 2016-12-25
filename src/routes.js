import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import UsersPage from './components/user/UsersPage';
import ManageUserPage from './components/user/ManageUserPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UsersPage} />
    <Route path="user/add" component={ManageUserPage} />
    <Route path="user/:id" component={ManageUserPage} />
  </Route>
);
