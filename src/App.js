import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import Pokemones from "./components/Pokemones/Pokemones";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";
import ThemeProvider from "./context/ThemeProvider";
import { ThemeContext } from "./context/ThemeContext";

function App() {



  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Pokemones tipo={""} />} />
            <Route path="/planta" element={<Pokemones tipo={"grass"} />} />
            <Route path="/agua" element={<Pokemones tipo={"water"} />} />
            <Route path="/fuego" element={<Pokemones tipo={"fire"} />} />
            <Route path="/pokemon/:numeroDePokemon" element={<PokemonDetail />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;