import React from "react"

const Friend = props => {
  return (
    <div>
      <ul>
        <li>{props.friend.name}</li>
        <li>{props.friend.age}</li>
        <li>{props.friend.email}</li>
      </ul>
    </div>
  )
}

export default Friend
