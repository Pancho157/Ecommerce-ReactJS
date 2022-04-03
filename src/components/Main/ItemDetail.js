// Componentes
import ItemCount from "./ItemCount";

// Styles
import "./styles/ItemDetail.css";

function ItemDetail({ data }) {
  // Renderiza la los detalles de un item en particular que recibe como prop
  return (
    <>
    {/* El main-container se utiliza para alinear las cosas */}
      <div className="main-container">
        <section className="img-section">
          <img src={data.imgUrl} alt={data.title} />
        </section>

      {/* El rightGroupElements se utiliza para dejar la sección para comprar y la descripción del producto al lado de la imagen siempre y cuando entren */}
        <div className="rightGroupElements">
          <section className="buy-section">
            <h2 className="main-title">{data.title}</h2>
            <p className="price">Precio: {data.price}</p>
            <p className="stock">Stock actual: {data.stock}</p>
            <div className="contador">
              <ItemCount stock={data.stock} />
            </div>
          </section>

          <section className="desc-section">
            <h2 className="description-title">Descripción del producto</h2>
            <p>- Marca: {data.brand}</p>
            <p>- Modelo: {data.model}</p>
            <p>- Categoría: {data.category}</p>
            <p>
              - Descripción:
              <br /> {data.description}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
