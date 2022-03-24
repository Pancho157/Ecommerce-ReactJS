import { useState } from "react";
import "./ItemCount.css";

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
        <button 
          onClick={onRemove}
        >
          -
        </button>
        <p>{userinput}</p>
        <button
          onClick={onAdd}
        >
          +
        </button>
      </div>

      <button className={"card-buy"}>Comprar</button>
    </>
  );
};



// Estuve haciendo algunas pruebas para hacerlo funcionar de otra manera, sin éxito todavía jajaja

// function onAdd({ userinput, stock, setUserInput }) {
//   if (userinput < stock) {
//     setUserInput(userinput + 1);
//   }
//   return userinput;
// }

// function onRemove({ userinput, setUserInput }) {
//   if (userinput > 1) {
//     setUserInput(userinput - 1);
//   }
//   return userinput;
// }

export default ItemCount;