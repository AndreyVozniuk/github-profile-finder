import React, {useState} from 'react'
import {makeApiClient} from '../../lib/api'
import {useFetch} from '../../lib/hooks/useFetch'
import Profile from '../profile/Profile'
import Search from '../search/Search'
import Loader from '../loader/Loader'
import './App.css'

const apiClient = makeApiClient('https://api.github.com')

function App() {
  const [username, setUsername] = useState('AndreyVozniuk')
  const {data: user, loading, error, setUrl} = useFetch(apiClient, `/users/${username}`)

  if(error){
    return <div>{error}</div>
  }

  function onChange(e) {
    setUsername(e.target.value)
  }

  function searchProfile(){
    setUrl('/users/' + username.trim())
  }

  return (
    <div className='App p-3'>
      <h1>GitHub profile finder</h1>
      <Search onChange={onChange} searchProfile={searchProfile}/>
      {loading ? <Loader /> : <Profile user={user} />}
    </div>
  )
}

export default App
