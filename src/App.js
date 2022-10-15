import Sun from './assets/img2.jpg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import TesteOpTernario from './components/TesteOpTernario';
import ShowUserName from './components/ShowUserName';
import Details from './components/Details';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';



function App() {
  const name = 'Pedro'
  const cars =[
    {id: 1, brand: 'KIA', color: 'Amarela', newCar: true , km:0},
    {id: 2, brand: 'Ferrari', color: 'Vermelha', newCar: true , km: 0},
    {id: 3, brand: 'Fiat', color: 'Laranja', newCar: false , km: 10003}
  ]

  function showMessage () {
    console.log("teste")
  }
  const[message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
  return (
    <div className="App">
      <h1>Avançando em React!</h1>
   
      <div>
        {/*Imagem em public */}
        <img src="/img1.jpg" alt="imagem por do sol" />
      </div>
        {/*Imagem em ASSETS */}
        <div>
          <img src={Sun} alt="Sol" />
          <button onClick = {() => {console.log('Essa é uma imagem do por do Sol!')}}>Clique aqui para testars</button>
          </div>
          <ManageData/>
          <ListRender/>
          <ConditionalRender/>
          <TesteOpTernario/>
          {/**PROPS */}
          <ShowUserName name ={name}/>
          {/**destructuring */}
          <Details brand = 'Puma' km ={0} color = 'Azul' novo = {true}/>
          {/**Reaproveitando código */}
          <Details brand = 'Chevrolet' km ={100300} color = 'Preto fosco' novo = {false}/>
          <Details brand = 'Fiat' km ={25440} color = 'Prata' novo = {false}/>

          {/**LOOP em Array de Objetos// MUITO BOMMM*/}
          {cars.map((car) => (
            <Details 
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar}/>
          ))}
          <Details brand='Fiat' km={34555} color= 'Prata' novo = {false}/>
        {/**Children PROP */}
          <Container nome ="Gabriel Maia">
            <p>Hoje é dia 15</p>
          </Container>
          <Container date ={15}>
            <p>Continuo testando, hj é dia</p>
          </Container>
          {/**Executar função em PROP */}
          <ExecuteFunction myFunction ={showMessage}/>
          {/**STATE LIFT */}
          <Message msg = {message}/>
          <ChangeMessageState handleMessage={handleMessage}/>
        </div>
   
  );
}

export default App;
