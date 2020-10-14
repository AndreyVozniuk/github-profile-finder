import React from 'react'

function InfoItem({title, data}) {
  return <div className='info'>
    <span className='badge badge-primary mr-1'>{title}</span> 
    <span className={`badge ${data ? 'badge-secondary' : 'badge-warning'}`}>
      {data || 'This information is missing'}
    </span>
  </div>
}

export default InfoItem