import React, { useState } from 'react';
import axios from 'axios';

import NavMenu from '../NavMenu/NavMenu';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials: {
        username: 'cobra',
        password: 'cobra'
      },
      isLoading: false
    }
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name] : event.target.value
      }
    })
  }

  login = event => {
    event.preventDefault()
    this.setState({ isLoading: true })
    console.log(this.state)

    // make a POST request, send credentials object to the api, log out response
    axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(response => {
        console.log('LoginForm post request response', response)
        window.localStorage.setItem('token', response.data.payload)
        setTimeout(() => {
          this.setState({ isLoading: false })
          this.props.history.push('/friendlist')
        }, 500)
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log('LoginForm Component props', this.props)
    return (
      <div>
        <NavMenu />
        <h2>Login Form</h2>
        {
          this.state.isLoading ? 
          <p>Spinner...</p> : 
          <div>
            <form onSubmit={this.login}>
              <input 
                type='text'
                name='username'
                onChange={this.handleChange}
                value={this.state.credentials.username}
                placeholder='Username'
              />
              <input 
                type='password'
                name='password'
                onChange={this.handleChange}
                value={this.state.credentials.password}
                placeholder='Password'
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        }
      </div>
    )
  }
}

export default LoginForm