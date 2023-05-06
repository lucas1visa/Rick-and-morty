import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Cards from './component/Cards/Cards';
const character = [{
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  origin: {
     name: 'Earth (C-137)',
     url: 'https://rickandmortyapi.com/api/location/1',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}  ]
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards character={character}/>
    </div>
  );
}

export default App;
