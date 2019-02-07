import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchFriends, showForm } from "../store/actions"
import Friend from "../components/Friend"
import { Message } from "../styles/messagesStyles"
import { FriendsListWrapper, FriendsWrapper } from "../styles/friendsListStyles"
import { Button } from "../styles/formStyles"

class FriendsList extends Component {
  componentDidMount = () => {
    this.props.fetchFriends()
  }

  render() {
    return (
      <FriendsListWrapper>
        <Message error>
          {this.props.error !== null && <h2>{this.props.error}</h2>}
        </Message>
        <Message>
          {this.props.loading && <h2>Loading your friends!!</h2>}
        </Message>
        <Message>
          {this.props.updating && <h2>Updating your friend</h2>}
        </Message>
        <Message>
          {this.props.deleting && <h2>Deleting your friend</h2>}
        </Message>
        <FriendsWrapper>
          {this.props.friends.map(friend => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </FriendsWrapper>
        <Button
          disabled={this.props.form ? true : false}
          onClick={() => this.props.showForm("Add")}
          removeIfDisabled
        >
          Add Friend
        </Button>{" "}
      </FriendsListWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.fetching,
    updating: state.updating,
    deleting: state.deleting,
    form: state.showForm,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchFriends: fetchFriends, showForm: showForm }
)(FriendsList)
