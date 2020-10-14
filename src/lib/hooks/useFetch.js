import {useState, useEffect} from 'react'

export function useFetch(apiClient, startUrl) { 
  let [url, setUrl] = useState(startUrl)
  let [data, setData] = useState(null)
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(null)

  useEffect( () => {
    setLoading(true)
    apiClient.fetchJSON(url)
    .then(user => {
      setData(user)
      setLoading(false)
    })
    .catch(setError)
  }, [url])

  return {data, loading, error, setUrl}
}
