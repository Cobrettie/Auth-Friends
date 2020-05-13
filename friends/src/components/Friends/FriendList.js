import React from 'react';

import NavMenu from '../NavMenu/NavMenu';


export default function FriendList(props) {
  console.log('FriendList props', props)
  return (
    <div>
      <NavMenu />
      <h2>Friend List Component - Here Are All Of Your Friends</h2>
    </div>
  )
}