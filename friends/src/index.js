import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './App';
import LoginForm from './components/LoginForm/LoginForm';
import FriendList from './components/Friends/FriendList';
import AddFriend from './components/Friends/AddFriend';
import './index.css';

import * as serviceWorker from './serviceWorker';

const PrivateRoute = ({ component: Component, ...rest }) => {
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
      <Route path='/login' component={LoginForm} />
      <Route path='/addfriend' component={AddFriend} />
      <PrivateRoute path='/friendlist' component={FriendList} />
      <Route exact path='/' component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
