import Sun from './assets/img2.jpg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import TesteOpTernario from './components/TesteOpTernario';
import ShowUserName from './components/ShowUserName';
import Details from './components/Details';

function App() {
  const name = 'Pedro'
  const cars =[
    {id: 1, brand: 'KIA', color: 'Amarela', newCar: true , km:0},
    {id: 1, brand: 'Ferrari', color: 'Vermelha', newCar: true , km: 0},
    {id: 1, brand: 'Fiat', color: 'Laranja', newCar: false , km: 10003}
  ]
  
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
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar}/>
          ))}
          <Details brand='Fiat' km={34555} color= 'Prata' novo = {false}/>
        </div>
   
  );
}

export default App;
