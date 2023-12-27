import { addDoc, collection, getFirestore } from "firebase/firestore/lite";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAJrMfr1JzTRjkfAep1kzaJFSXV3AdWMMw",
  authDomain: "coderhouse-ecommerce-a4536.firebaseapp.com",
  projectId: "coderhouse-ecommerce-a4536",
  storageBucket: "coderhouse-ecommerce-a4536.appspot.com",
  messagingSenderId: "621756576878",
  appId: "1:621756576878:web:ae07e9750caf0ceb47627f",
};

export default async function registrarPedido(pedido) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const pedidos = collection(db, "pedidos");

  await addDoc(pedidos, {
    pedido,
  });

  alert("Tu pedido fue registrado, gracias por tu compra!");
}
