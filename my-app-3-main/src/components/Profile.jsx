import React from 'react'

function Profile({ name, bio, avatar }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '250px' }}>
      <img src={avatar} alt="avatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  )
}

export default Profile
