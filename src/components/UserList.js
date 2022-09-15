import axios from 'axios';
import React, { useEffect, useState } from 'react'
import User from './User';
import './User.css';

const UserList = () => {

  const [users, setUsers] = useState([]);  

  useEffect( () => {
    const fetchUsers = async() => {
        let resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(resp.data)
    }
    fetchUsers();
  }, [])

  

  return (
    <div className='image-container'>
      {users.length ? users.map( (user) => <User key={user.id} user={user} /> ) : null}
    </div>
  )
}

export default UserList