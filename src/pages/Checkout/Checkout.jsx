import "./Checkout.css";
import React, { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import registrarPedido from "./registrarPedido";

const Checkout = () => {
  const { totalPrice, pokemones, pokemonQuantity } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert("Emails no coinciden!");
      return;
    }
  };

  return (
    <form className="pedido" onSubmit={handleSubmit}>
      <div className="titulo"><b>Tu pedido:</b></div>

      <div>Total a pagar: $ {totalPrice}</div>
      <label>
        Nombre:
        <input className="input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Apellido:
        <input className="input"
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Teléfono:
        <input className="input"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Email:
        <input className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <br />


      <button
        type="button"
        onClick={() => {
          const cliente = formData;
          delete cliente.confirmEmail;

          registrarPedido({
            cliente,
            precio: totalPrice,
            pokemones: pokemones,
            cantidad: pokemonQuantity,
          });
        }}
      >
        Comprar
      </button>
    </form>
  );
};

export default Checkout;
