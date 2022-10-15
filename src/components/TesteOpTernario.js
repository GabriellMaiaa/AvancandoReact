import React, { useState } from 'react'

const TesteOpTernario = () => {
    const [idade] = useState(13)
  
    return (
    <div>
        <p>Com quantos anos posso alugar um carro?</p>
   
    <div>
        {idade > 21 ? (
            <div>
                <p>Ele pode alugar pois é MAIOR DE IDADE!!</p>
            </div>
        ) : (
            <div>
                <p>NÃO PODE alugar pois é menor, e é proibido!</p>
            </div>
        )}
    </div>
    </div>
  )
}

export default TesteOpTernario