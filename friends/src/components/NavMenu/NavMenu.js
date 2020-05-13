import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/friendlist'>Friend List</Link>
        <Link to ='/addfriend'>Add Friend</Link>
      </nav>
    </div>
  )
}