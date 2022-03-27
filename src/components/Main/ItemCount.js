import { useState } from "react";
import "./styles/ItemCount.css";

const ItemCount = ({ stock }) => {
  const [userinput, setUserInput] = useState(1);

  const onAdd = () => {
    if (userinput < stock) {
      setUserInput(userinput + 1);
    }
  };

  const onRemove = () => {
    if (userinput > 1) {
      setUserInput(userinput - 1);
    }
  };

  return (
    <>
      <div className={"count-container"}>
        <button onClick={onRemove} disabled={userinput <= 0 ? true : null}>
          -
        </button>
        <p>{userinput}</p>
        <button onClick={onAdd}>+</button>
      </div>

      <button className={"card-buy"}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
