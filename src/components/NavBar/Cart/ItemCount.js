import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({actualStock}) {
  const [userInput, setUserInput] = useState(3);

  const onAdd = (actualStock) => {
    if (userInput < {actualStock}) {
      setUserInput(userInput + 1);
    }
  };

  const onRemove = () => {
    if (userInput > 1) {
      setUserInput(userInput - 1);
    }
  };

  return (
    <>
      <div className={"count-container"}>
        <button onClick={onRemove}>-</button>
        <p>{userInput}</p>
        <button onClick={onAdd}>+</button>
      </div>
    </>
  );
}
