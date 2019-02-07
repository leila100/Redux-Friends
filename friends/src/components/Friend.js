import React from "react"
import { connect } from "react-redux"

import { showForm, deleteFriend } from "../store/actions"
import {
  FriendWrapper,
  FriendInfo,
  IconsWrapper
} from "../styles/friendsListStyles"

const Friend = props => {
  return (
    <FriendWrapper>
      <FriendInfo>
        <div>
          <span>Name :</span> {props.friend.name}
        </div>
        <div>
          <span>Age : </span>
          {props.friend.age}
        </div>
        <div>
          <span>Email:</span> {props.friend.email}
        </div>
      </FriendInfo>
      <IconsWrapper>
        <i
          className="fas fa-user-edit"
          onClick={() => props.showForm("Update", props.friend)}
        />
        <i
          className="fas fa-user-minus"
          onClick={() => props.deleteFriend(props.friend.id)}
        />
      </IconsWrapper>
    </FriendWrapper>
  )
}

export default connect(
  null,
  { showForm, deleteFriend }
)(Friend)
