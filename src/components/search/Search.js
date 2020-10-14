import React from 'react'

function Search({onChange, searchProfile}){
  return <div className='search'>
  <input className='mr-1' placeholder='input username here...' onChange={onChange}/>
  <button className='btn btn-outline-primary btn-sm' onClick={searchProfile}>
    <i className='fa fa-search' />
  </button>
</div>
}

export default Search

