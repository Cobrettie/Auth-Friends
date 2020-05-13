import React from 'react';
import axios from 'axios';

import NavMenu from '../NavMenu/NavMenu';

class AddFriend extends React.Component {
  render() {
    return (
      <div>
        <NavMenu />
        <h2>Add Friend Component</h2>

        <div>
          <form>
            <input
              type='text'
              name='name'
              placeholder='name'
            />
            <input 
              type='email'
              name='email'
              placeholder='email'
            />
            <input 
              type='text'
              name='age'
              placeholder='age'
            />
          </form>
        </div>

      </div>
    )
  }
}