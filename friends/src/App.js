import React from "react"
import { connect } from "react-redux"

import FriendsList from "./views/FriendsList"
import FriendForm from "./views/FriendForm"

const App = props => {
  return (
    <div>
      <FriendsList />
      {props.showForm ? <FriendForm /> : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    showForm: state.showForm
  }
}

export default connect(mapStateToProps)(App)
