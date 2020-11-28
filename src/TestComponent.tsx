import React, { useState } from 'react'

type Props = {
  text: string
}
type UserData = {
  id: number
  name: string
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0)
  const [user, setUser] = useState<UserData>({ id: 1, name: 'tes' })

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <h1>
        {user.id}
        {user.name}
      </h1>
    </div>
  )
}

export default TestComponent
