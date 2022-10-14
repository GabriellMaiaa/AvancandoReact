import React, { useState } from 'react'

const ListRender = () => {
    const[list, setList] = useState(['Matheus','Pedro', 'Josias']);

    const [users, setUsers] = useState([
        {nome: 'Gabriel', age: 18, cidade: 'Manaus', id:1},
        {nome: 'Pedro', age: 23, cidade: 'Manaus', id:2},
        {nome: 'Daniel', age: 13, cidade: 'Manacapuru', id:3}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>ListRender
        <ul>
           {list.map((item, i) => ( // A key é referenciada em cima e em baixo
            <li key={i}>{item}</li>
           ))} 
        </ul>
        <ul>
            {users.map((nomes) => (
                <li key={nomes.nome}>{nomes.nome} - {nomes.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete RandomUser</button>

    </div>
  )
}

export default ListRender