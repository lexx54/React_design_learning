import { FC, useEffect, memo } from 'react'

interface Props {
  id: number,
  task: string,
  handleDelete: Function
}

const Task: FC<Props> = ({ task, id, handleDelete }) => {
  // useEffect(() => {
  //   console.log('rendering task')
  // })
  return (
    <li>{task} <button onClick={() => handleDelete(id)}>X</button></li>
  )
}

export default memo(Task)