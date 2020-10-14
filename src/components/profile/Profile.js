import React from 'react'
import InfoItem from '../info-item/InfoItem'

function Profile({user}){
  return !user.id ? <div className='mt-3' style={{fontSize: '19px', fontWeight:'bold'}}>User not found {'=('}</div> : 
  <div className='profile mt-3'>
    {user.name === 'Andrey_V' ? <div style={{fontSize:'11px', fontWeight: 'bold'}}>*Example</div> : ''}
    <img src={user.avatar_url} alt='gitHub profile pic'/>
    <InfoItem title='Name: ' data={user.name} />
    <InfoItem title='Bio: ' data={user.bio} />
    <InfoItem title='Followers: ' data={user.followers} />
    <InfoItem title='Following: ' data={user.following} />
    <InfoItem title='Location: ' data={user.location} />
    <InfoItem title='Created: ' data={user.created_at.split('T')[0]} />
    <InfoItem title='Last update: ' data={user.updated_at.split('T')[0]} />
  </div> 
}

export default Profile

