import React, { useReducer, useState } from 'react'

const Fetch = ({ children, url }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, toggleLoading] = useReducer((prev) => !prev, true)

  useState(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => setError(error.message))
      .finally(() => toggleLoading())
  }, [])
  return children({ data, error, loading })
}

export default Fetch