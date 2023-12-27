const ItemCount = ({ stock, setCount, count }) => {
  const onAdd = () => {
    if (count === stock) return;
    setCount(count + 1);
  };

  const onSubstract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className="contadorPokemon">
      <button className="boton" onClick={onSubstract}>
        -
      </button>
      <span>{count}</span>
      <button className="boton" onClick={onAdd}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
