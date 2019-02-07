import React, { Component } from "react"
import { connect } from "react-redux"

import { addFriend, updateFriend } from "../store/actions"

class FriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: undefined,
      email: ""
    }
  }

  componentDidMount = () => {
    if (this.props.currentFriend) {
      const friend = this.props.friends.find(
        friend => friend.id === this.props.currentFriend.id
      )
      this.setState({
        name: friend.name,
        age: friend.age,
        email: friend.email
      })
    }
  }

  action = event => {
    event.preventDefault()
    if (this.props.action === "Add") this.props.addFriend(this.state)
    if (this.props.action === "Update")
      this.props.updateFriend(this.props.currentFriend.id, this.state)
  }

  saveInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.action}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.saveInput}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.saveInput}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.saveInput}
        />
        <button type="submit">{this.props.action} Friend</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    action: state.showForm,
    currentFriend: state.currentFriend,
    friends: state.friends
  }
}

export default connect(
  mapStateToProps,
  { addFriend: addFriend, updateFriend: updateFriend }
)(FriendForm)
