import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd, onRemove }) => {
  const [userinput, setUserInput] = useState(1);


  return (
    <>
      <div className={"count-container"}>
        <button stock={stock} userinput={userinput} inputSetter={setUserInput} onClick={() => onRemove()}>
          -
        </button>
        <p>{userinput}</p>
        <button stock={stock} userinput={userinput} inputSetter={setUserInput} onClick={() => onAdd()}>
          +
        </button>
      </div>

      <button className={"card-buy"}>Comprar</button>
    </>
  );
};

function onAdd({userinput, stock, inputSetter}) {
  if (userinput < stock) {
    inputSetter(userinput + 1);
  } return userinput;}

function onRemove({userinput, inputSetter}) {
  if (userinput > 1) {
    inputSetter(userinput - 1);
  }
  return userinput;
}

  export default ItemCount;