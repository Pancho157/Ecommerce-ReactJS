// Components
import ItemList from "./ItemList";

// Styles
import "./styles/ItemListContainer.css";

export default function Main(props) {
  return (
    <main className="main">
      <h2 className="main-tittle">{props.children}</h2>

      <ItemList />
      {/* ItemList es el contenedor que llama a una función (Item) para renderizar los datos de las cards que se encuentran en el archivo data.js */}
    </main>
  );
}
