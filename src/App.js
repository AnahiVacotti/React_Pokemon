import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useEffect,useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
 


  return (
    <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos entrenadores pokemon" />} />

        
        </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;