import { addDoc, collection, getFirestore } from "firebase/firestore/lite";

import { initializeApp } from "firebase/app";

// TODO: pasar las variables a .ENV

const firebaseConfig = {
  apiKey: "AIzaSyAJrMfr1JzTRjkfAep1kzaJFSXV3AdWMMw",
  authDomain: "coderhouse-ecommerce-a4536.firebaseapp.com",
  projectId: "coderhouse-ecommerce-a4536",
  storageBucket: "coderhouse-ecommerce-a4536.appspot.com",
  messagingSenderId: "621756576878",
  appId: "1:621756576878:web:ae07e9750caf0ceb47627f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const pokemonCollection = collection(db, "pokemones");

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=800&offset=0";

export async function copyDataToFirebase() {
  try {
    const response = await fetch(apiUrl);

    const data = await response.json();
    const pokemonData = data.results;

    for (const pokemon of pokemonData) {
      await addDoc(pokemonCollection, {
        name: pokemon.name,
        url: pokemon.url,
      });
    }
  } catch (error) {
    console.error("Error al copiar datos a Firebase:", error.message);
  }
}
