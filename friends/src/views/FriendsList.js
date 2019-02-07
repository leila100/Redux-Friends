import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchFriends, showForm } from "../store/actions"
import Friend from "../components/Friend"

class FriendsList extends Component {
  componentDidMount = () => {
    this.props.fetchFriends()
  }

  render() {
    return (
      <div>
        {this.props.error !== null && <h2>{this.props.error}</h2>}
        {this.props.loading && <h2>Loading your friends!!</h2>}
        {this.props.updating && <h2>Updating your friend</h2>}
        {this.props.deleting && <h2>Deleting your friend</h2>}
        {this.props.friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
        <button onClick={() => this.props.showForm("Add")}>Add Friend</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.fetching,
    updating: state.updating,
    deleting: state.deleting,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchFriends: fetchFriends, showForm: showForm }
)(FriendsList)
