import React from 'react'
import { useState } from 'react'

const ManageData = () => {
    let someData = 10
    let tste = 'Gabriel Maia'
    const [number, setNumber] = useState(20)
    console.log(number)
  return (
    <div>
        <div>
        <p>Valor: {someData}</p>
        <button onClick={() => {someData = 15}}>Mudar o valor da variável</button>
        </div>
        <div>
            {/**Usando aqui o UseState */}
        <p>Valor: {number}</p>
        <p>O nome da lenda é {tste}</p>
        <button onClick={() => setNumber(65)}>UseState</button>
        
        <button onClick={() => {console.log('Clicou')}}>tets</button>
        </div>
    </div>
  )
}

export default ManageData