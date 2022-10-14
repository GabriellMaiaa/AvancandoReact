import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)
 
    const [name, setName] = useState('João')
    
    
    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se for true, sim!</p>}
        {!x && <p>Agora o valor é false!</p>} {/**Operador Condicional If e Else */}

        <div>
            {name ==='Marcos' ? (
                <div>
                    <p>O nome dele é João</p>
                </div>
            ) : (
                <div>
                    <button onClick={() => {console.log('O nome do brother NÃO É João!')}}>Clique aqui para saber o nome</button>
                </div>
            )}
            <div>
                <button onClick={() => {setName('O nome dele é João')}}>Aquiiii</button>
            </div>
        </div>
       
    </div>
  )
}

export default ConditionalRender