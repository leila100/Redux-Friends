import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchFriends, showForm } from "../actions"
import Friend from "../components/Friend"

class FriendsList extends Component {
  componentDidMount = () => {
    this.props.fetchFriends()
  }

  render() {
    return (
      <div>
        {this.props.error !== null ? <h2>{this.props.error}</h2> : null}
        {this.props.loading ? <h2>Loading your friends!!</h2> : null}
        {this.props.friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
        <button onClick={() => this.props.showForm("add")}>Add Friend</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.fetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchFriends: fetchFriends, showForm: showForm }
)(FriendsList)
