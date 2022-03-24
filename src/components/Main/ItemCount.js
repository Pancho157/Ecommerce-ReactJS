import "./ItemCount.css";

const ItemCount = ({ stock, onAdd, onRemove }) => {
  var userinput = 1;

  return (
    <>
      <div className={"count-container"}>
        <button stock={stock} userinput={userinput} onClick={onRemove}>
          -
        </button>
        <p>{userinput}</p>
        <button stock={stock} userinput={userinput} onClick={onAdd}>
          +
        </button>
      </div>

      <button className={"card-buy"}>Comprar</button>
    </>
  );
};

export default ItemCount;

function onAdd({ userInput, stock }) {
  if (userInput < stock) {
    userInput++;
    console.log(userInput);
  }
  return userInput;
}

function onRemove({ userinput }) {
  if (userinput > 1) {
    userinput--;
  }
  return userinput;
}
