import React, { useState } from 'react';

import NavMenu from '../NavMenu/NavMenu';

export default function LoginForm() {
  const [credentials, setCredentials] = useState({})

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name] : event.target.value
    })
  }

  return (
    <div>
      <NavMenu />
      <h2>Login Form</h2>

      <div>
        <form>
          <input 
            type='text'
            name='username'
            onChange={handleChange}
            value={credentials.username}
            placeholder='Username'
          />
          <input 
            type='password'
            name='password'
            onChange={handleChange}
            value={credentials.password}
            placeholder='Password'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}