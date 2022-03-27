import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./styles/ItemListContainer.css";

export default function Main(props) {
  return (
    <main className="main">
      <h2 className="main-tittle">Nuestros Productos</h2>
      <div className="cards-container">
        {/* Los datos de las cards a renderizar se deben colocar en el archivo data.js */}

      <ItemList />
      </div>
    </main>
  );
}

