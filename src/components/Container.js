import React from 'react'

const Container = ({children, nome, date}) => {
  return (
    <div>
        <h2>Este é o título do Container</h2>
        <h3>O meu nome é {nome}</h3>
        {children}
        {date}
    </div>
  )
}

export default Container