import "./ItemListContainer.css";

export default function Main(props) {
  return (
    <main className="main">
      <h2 className="main-tittle">Nuestros Productos</h2>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

function Card() {
  return (
    <div className="card">
      <h3 className={"card-tittle"}>Remera Talle M</h3>
      <p>Talle: M</p>
      <p>Precio: $200</p>
      <p>Stock: 20</p>
      <button className={"card-buy"}>Comprar</button>
    </div>
  );
}
