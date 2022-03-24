import ItemCount from "./ItemCount";
import "./ItemListContainer.css";

export default function Main(props) {
  return (
    <main className="main">
      <h2 className="main-tittle">Nuestros Productos</h2>
      <div className="cards-container">
        {/* Acá se colocan los elementos que aparecen en el cuerpo del main de la landing page */}
        <Card title={"Multímetro"} size={"M"} price={"200"} stock={"20"} />
        <Card
          imgUrl={"#"}
          title={"Alcohol Isopropilico"}
          brand={"Comppit"}
          model={"Generico"}
          price={"260"}
          stock={"20"}
        />
        <Card
          imgUrl={"#"}
          title={"Alcohol Isopropilico"}
          brand={"Multi"}
          model={"Generico"}
          price={"260"}
          stock={"20"}
        />
        <Card
          imgUrl={"#"}
          title={"Alcohol Isopropilico"}
          brand={"Multi"}
          model={"Generico"}
          price={"260"}
          stock={"20"}
        />
        <Card
          imgUrl={"#"}
          title={"Alcohol Isopropilico"}
          brand={"Multi"}
          model={"Generico"}
          price={"260"}
          stock={"20"}
        />
        <Card
          imgUrl={"#"}
          title={"Alcohol Isopropilico"}
          brand={"Multi"}
          model={"Generico"}
          price={"260"}
          stock={"20"}
        />
        <Card
          imgUrl={"#"}
          title={"Alcohol Isopropilico"}
          brand={"Multi"}
          model={"Generico"}
          price={"260"}
          stock={"20"}
        />
        <Card
          imgUrl={"#"}
          title={"Alcohol Isopropilico"}
          brand={"Multi"}
          model={"Generico"}
          price={"260"}
          stock={"20"}
        />
      </div>
    </main>
  );
}

function Card(props) {
  const stock = props.stock;

  return (
    <div className="card">
      <img href={props.imgUrl} alt={props.title} className={"card-image"}></img>
      <h3 className={"card-tittle"}>{props.title}</h3>
      <p>Marca: {props.brand}</p>
      <p>Modelo: {props.model}</p>
      <p>Precio: $ {props.price}</p>
      <p>Stock actual: {props.stock}</p>
      <ItemCount stock={stock} />
    </div>
  );
}
