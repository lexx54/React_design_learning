import React from 'react'
import withInnerWIdth from './withInnerWidth'

type Props = {
  innerWidth: number
}

const MyComponent = ({ innerWidth }: Props) => {
  return (
    <div>width: {innerWidth}</div>
  )
}

const MyComponentWithInnerWidth = withInnerWIdth(MyComponent);

export default MyComponentWithInnerWidth