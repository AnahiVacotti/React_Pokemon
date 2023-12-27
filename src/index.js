import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJrMfr1JzTRjkfAep1kzaJFSXV3AdWMMw",
  authDomain: "coderhouse-ecommerce-a4536.firebaseapp.com",
  projectId: "coderhouse-ecommerce-a4536",
  storageBucket: "coderhouse-ecommerce-a4536.appspot.com",
  messagingSenderId: "621756576878",
  appId: "1:621756576878:web:ae07e9750caf0ceb47627f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Obtén una referencia a la colección en Firebase
const db = getFirestore(app)
const pokemonCollection = collection(db, 'pokemones');

// URL de la API pública de Pokémon
const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=800&offset=0";

// Función para obtener los datos de la API y guardarlos en Firebase
async function copyDataToFirebase() {
  try {
    const response = await fetch(apiUrl);
    //if (!response.ok) {
      //throw new Error(HTTP error! Status: ${response.status});
    //}

    const data = await response.json();
    const pokemonData = data.results;

    // Itera sobre los resultados y agrégales a la colección de Firebase
    for (const pokemon of pokemonData) {
        await addDoc(pokemonCollection, {
            name: pokemon.name,
            url: pokemon.url
          });
      //await pokemonCollection.firestore.;
    }

    console.log("Datos copiados exitosamente a Firebase.");
  } catch (error) {
    console.error("Error al copiar datos a Firebase:", error.message);
  }
}

// Ejecuta la función

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
