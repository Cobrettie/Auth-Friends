import React, { useState } from 'react';

import NavMenu from '../NavMenu/NavMenu';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <NavMenu />
        <h2>Login Form</h2>

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
      </div>
    )
  }
}

export default LoginForm









// export default function LoginForm() {
//   const [credentials, setCredentials] = useState({})

//   const handleChange = event => {
//     setCredentials({
//       ...credentials,
//       [event.target.name] : event.target.value
//     })
//   }

//   return (
//     <div>
//       <NavMenu />
//       <h2>Login Form</h2>

//       <div>
//         <form>
//           <input 
//             type='text'
//             name='username'
//             onChange={handleChange}
//             value={credentials.username}
//             placeholder='Username'
//           />
//           <input 
//             type='password'
//             name='password'
//             onChange={handleChange}
//             value={credentials.password}
//             placeholder='Password'
//           />
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     </div>
//   )
// }