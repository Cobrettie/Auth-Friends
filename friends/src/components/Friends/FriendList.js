import React from 'react';
import axios from 'axios';

import NavMenu from '../NavMenu/NavMenu';

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
          console.log('FriendList getFriend GET req response', response)
          this.setState({ friendList: response.data })
        })
    }

    getFriends()
  }

  render() {
    console.log('FriendList Props', this.props)
    return (
      <div>
        <NavMenu />
        <h2>Friend List Component - Here Are All Of Your Friends</h2>
        {this.state.friendList.length === 0 ? 
          <p>Loading friends...</p> :
          this.state.friendList.map(friend => {
          return (
            <div key={friend.id}>
              <p>{friend.name}</p>
              <p>{friend.email}</p>
              <p>{friend.age}</p>
            </div>
            )
          })
        }
      </div>
    )
  }
}

export default FriendList