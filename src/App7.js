import React, { useRef, useState, useMemo, useCallback } from 'react';
import './App.css'
import UserList from './UserList3';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log("활성 사용자 수 셈")
  return users.filter(uesr => uesr.active).length
}

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const { username, email } = inputs
  const onChange = useCallback(e => {
    const {name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    }, [inputs])
  })

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "aaa",
      email: "asdf@naver.com",
      active: true
    },
    {
      id: 2,
      username: "bbb",
      email: "bbbb@naver.com",
      active: false
    },
    {
      id: 3,
      username: "ccc",
      email: "cccc@naver.com",
      active: false
    }
  ])

  const nextId = useRef(4)

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }

    setUsers(users => users.concat(user))
    setInputs({
      username: "",
      email: ""
    })
    nextId.current += 1
  }, [username, email])

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id))
  }, [])
  
  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id ? {...user, active: !user.active }
      : user
    ))
  }, [])

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  )
}


export default App;