import React, { Component } from "react"
import { connect } from "react-redux"

import { addFriend } from "../actions"

class FriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: undefined,
      email: ""
    }
  }

  action = event => {
    event.preventDefault()
    console.log(this.props.action)
    if (this.props.action === "add") this.props.addFriend(this.state)
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
        <button type="submit">Add Friend</button>
      </form>
    )
  }
}

export default connect(
  null,
  { addFriend: addFriend }
)(FriendForm)
