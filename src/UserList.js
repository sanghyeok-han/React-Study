import React from "react"

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b><span>({user.email})</span>
    </div>
  )
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "aaa",
      email: "asdf@naver.com"
    },
    {
      id: 2,
      username: "bbb",
      email: "bbbb@naver.com"
    },
    {
      id: 3,
      username: "ccc",
      email: "cccc@naver.com"
    }
  ]
  return (
    <div>
      {
        users.map(
          user => (<User user={user} key={user.id}/>)
        )
      }
    </div>
  )
}

export default UserList