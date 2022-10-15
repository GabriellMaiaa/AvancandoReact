import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
  const mensagens =['Eai', 'BB', 'lindão']
  
    return (
    <div>
      <button onClick={() => (handleMessage(mensagens[0]))}>1</button>
      <button onClick={() => (handleMessage(mensagens[1]))}>2</button>
      <button onClick={() => (handleMessage(mensagens[2]))}>3</button>
    </div>
  )
}

export default ChangeMessageState
