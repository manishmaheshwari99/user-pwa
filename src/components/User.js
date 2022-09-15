import React from 'react'


const User = (props) => {

  const { id, name } = props.user;
  return (
    <div>
      <img src={`../images/img${id}.jpg`} />
    </div>
  )
}

export default User