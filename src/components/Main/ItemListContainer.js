/* El objetivo de este archivo es el de contener todas las cards y actuar como una etiqueta <main></main> en las pages que muestren cards sin filtrarlas */

// Components
import ItemList from "./ItemList";

// Styles
import "./styles/ItemListContainer.css";

export default function ItemListContainer(props) {
  return (
    <main className="homePage-main">
      <h2 className="main-tittle">{props.children}</h2>

      <ItemList />
      {/* ItemList es el contenedor que llama a una función (Item) para renderizar los datos de las cards que se encuentran en el archivo data.js */}
    </main>
  );
}
