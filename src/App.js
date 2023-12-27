import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";
import Checkout from "./pages/Checkout/Checkout";
import Navbar from "./components/Navbar/Navbar";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import Pokemones from "./components/Pokemones/Pokemones";
import React from "react";
import ThemeProvider from "./context/ThemeProvider";

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
            <Route
              path="/pokemon/:numeroDePokemon"
              element={<PokemonDetail />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
