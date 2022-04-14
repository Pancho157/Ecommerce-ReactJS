// Este archivo recibe los parametros un ID y categoría mediante useParams(), luego reccorre los productos y busca al/los (aunque solo debería haber uno) que cohincidan con los parametros enviados mediante la URL y lo renderiza

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { mainPageProducts } from "../../data/data";

// Componentes
import ItemCount from "./ItemCount";

// Styles
import "./styles/ItemDetail.css";

function ItemDetail() {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductByID(mainPageProducts, id);
  }, []);

  const getProductByID = (array, id) => {
    return array.map((product) => {
      if (product.id == id) {
        return setProductData(product);
      }
    });
  };

  // Renderiza la los detalles de un item en particular que recibe como prop
  return (
    <>
      {/* El main-container se utiliza para alinear las cosas */}
      <div className="main-container">
        <section className="img-section">
          {/* {productData.images.map( (image) => {
            return <img src={image.imgUrl} alt={image.title} />
          })} 

          Estoy experimentando para agregar varias imagenes cuando las haya, pero me da error cuando las monto (si la página estaba cargada me aplica bien los cambios */}

          <img src={productData.imgUrl} alt={productData.title} />
        </section>
        {/* El rightGroupElements se utiliza para dejar la sección para comprar y la descripción del producto al lado de la imagen siempre y cuando entren */}
        <div className="rightGroupElements">
          <section className="buy-section">
            <h2 className="main-title">{productData.title}</h2>
            <p className="price">Precio: {productData.price}</p>
            <p className="stock">Stock actual: {productData.stock}</p>
            <div className="contador">
              {/* Dependiendo del estado del contador (exclusivo para esto) se renderizará el ItemCount o el botón que redirige al detalle del carrito */}
                <ItemCount
                  stock={productData.stock}
                  data={productData}
                />
            </div>
          </section>

          <section className="desc-section">
            <h2 className="description-title">Descripción del producto</h2>
            <p>- Marca: {productData.brand}</p>
            <p>- Modelo: {productData.model}</p>
            <p>- Categoría: {productData.category}</p>
            <p>
              - Descripción:
              <br /> {productData.description}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
