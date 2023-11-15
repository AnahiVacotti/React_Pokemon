import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

import Pokemones from './components/Pokemones/Pokemones';



function App() {

  return (
    <BrowserRouter >
        <Navbar />
        <ItemListContainer greeting="¡Bienvenidos entrenadores pokemon!" />
        <Pokemones />
        <Routes>
          <Route path="/" element={<ItemListContainer/> } />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;