import React from 'react'
type Post = {
  userId: number
  id: number,
  title: string
  body: string
}

export type Props = {
  data: Post[]
  error: string,
  loading: boolean
}

const List = ({ data, error, loading }: Props) => {
  if (loading) return <p>Loading</p>
  if (error) return <p>Something went wrong: {error}</p>
  return (
    <div>
      <h2>List</h2>
      <ul>
        {
          data.map((item) => (
            <li key={item.id}>
              <span>{item.userId}</span>
              {' '}
              <span>{item.title}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default List