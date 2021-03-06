import React from 'react';
import axios from 'axios';

import NavMenu from '../NavMenu/NavMenu';

import { FriendListHeader, FriendListContainerDiv } from './FriendStyles';

class FriendList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      friendList: []
    }
  }

  componentDidMount() {
    const getFriends = () => {
      axios.get('http://localhost:5000/api/friends')
        .then(response => {
          this.setState({ friendList: response.data })
        })
    }

    getFriends()
  }

  render() {
    return (
      <div>
        <NavMenu />
        <FriendListHeader>Your Friends</FriendListHeader>
        {this.state.friendList.length === 0 ? 
          <p>Loading friends...</p> :
          <FriendListContainerDiv>
            {this.state.friendList.map(friend => {
              return (
                <div key={friend.id}>
                  <p>Name: {friend.name}</p>
                  <p>Email: {friend.email}</p>
                  <p>Age: {friend.age}</p>
                </div>
              )
            })}
          </FriendListContainerDiv>
        }
      </div>
    )
  }
}

export default FriendList