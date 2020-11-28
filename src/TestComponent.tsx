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
  const [inputData, setinputData] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setinputData(e.target.value)

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <h1>
        {user.id}
        {user.name}
      </h1>
      <h1>
        <input type="text" value={inputData} onChange={handleInputChange} />
      </h1>
      <h1>{inputData}</h1>
    </div>
  )
}

export default TestComponent
