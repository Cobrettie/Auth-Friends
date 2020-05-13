import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './App';
import LoginForm from './components/LoginForm/LoginForm';
import FriendList from './components/Friends/FriendList';
import './index.css';

import * as serviceWorker from './serviceWorker';

const PrivateRoute = ({ component: FriendList, ...rest }) => {
  return (
    <Route 
      {...rest} 
      render={props => 
        localStorage.getItem('token') ? 
        ( <FriendList {...props} /> ) :
        ( <Redirect to='/login' /> )
    } 
    />
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PrivateRoute path='/friendlist' component={FriendList} />
      {/* <Route exact path='/friendlist' component={FriendList} /> */}
      <Route path='/login' component={LoginForm} />
      <Route exact path='/' component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
