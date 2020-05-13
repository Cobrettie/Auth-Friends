import React from 'react';
import axios from 'axios';

import NavMenu from '../NavMenu/NavMenu';

class AddFriend extends React.Component {
  state = {
    friend: {
      // id: 27,
      name: 'friend one eleven',
      age: 35,
      email: 'your email here'
    }
  }

  handleChange = event => {
    this.setState({
      friend: { 
        ...this.state.friend,
        [event.target.name] : event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios.post('http://localhost:5000/api/friends', this.state.friend)
      // .then(response => {
      //   console.log('AddFriend POST req res', response)
      // })
      // .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <NavMenu />
        <h2>Add Friend Component</h2>

        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              placeholder='name'
            />
            <input 
              type='email'
              name='email'
              onChange={this.handleChange}
              placeholder='email'
            />
            <input 
              type='number'
              name='age'
              onChange={this.handleChange}
              placeholder='age'
            />
            <button type='submit'>Add Friend</button>
          </form>
        </div>

      </div>
    )
  }
}

export default AddFriend