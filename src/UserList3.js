import React, { useEffect } from "react"

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user

  useEffect(() => {
    // console.log("after change")
    // console.log(user)
    return () => {
      // console.log("before change")
      // console.log(user)
    }
  }, [user])
  return (
    <div>
      <b 
        style={{
          color: active ? "green" : "black",
          cursor: "pointer"
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
})

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {
        users.map(
          (user, index) => (
            <User
              user={user}
              key={user.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          )
        )
      }
    </div>
  )
}

export default React.memo(UserList, (prevProps, nextProps) => 
  nextProps.users === prevProps.users
) // 두 번째 인자는 조심해서 사용
