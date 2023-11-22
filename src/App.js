import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import Pokemones from "./components/Pokemones/Pokemones";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokemones tipo={""} />} />
        <Route path="/planta" element={<Pokemones tipo={"grass"} />} />
        <Route path="/agua" element={<Pokemones tipo={"water"} />} />
        <Route path="/fuego" element={<Pokemones tipo={"fire"} />} />
        <Route path="/pokemon/:numeroDePokemon" element={<PokemonDetail />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;