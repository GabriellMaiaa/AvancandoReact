import React from 'react'

const Details = ({brand, km, color}) => {
  return (
    <div>
       <h2>Detalhes do Carro:</h2>
       <ul> {/**Modo mais Tradicional de se usar PROPS */}
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
       </ul>
    </div>
  )
}

export default Details