import React from "react"
import { connect } from "react-redux"

import { showForm, deleteFriend } from "../store/actions"

const Friend = props => {
  return (
    <div>
      <ul>
        <li>{props.friend.name}</li>
        <li>{props.friend.age}</li>
        <li>{props.friend.email}</li>
      </ul>
      <div>
        <i
          className="fas fa-user-edit"
          onClick={() => props.showForm("Update", props.friend)}
        />
        <i
          className="fas fa-user-minus"
          onClick={() => props.deleteFriend(props.friend.id)}
        />
      </div>
    </div>
  )
}

export default connect(
  null,
  { showForm, deleteFriend }
)(Friend)
