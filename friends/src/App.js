import React from "react"
import { connect } from "react-redux"

import FriendsList from "./containers/FriendsList"
import FriendForm from "./containers/FriendForm"

const App = props => {
  return (
    <div>
      <FriendsList />
      {props.showForm ? <FriendForm action={props.showForm} /> : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    showForm: state.showForm
  }
}

export default connect(mapStateToProps)(App)
