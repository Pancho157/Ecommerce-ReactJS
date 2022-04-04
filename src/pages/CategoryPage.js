import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainPageProducts } from "../data/data";
import { Link } from "react-router-dom";

// Componentes
import Item from "../components/Main/Item";

// Styles
import "../components/Main/styles/ItemDetail.css";

function CategoryPage() {
  const { category } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductByID(mainPageProducts, category);
  }, [category]);

  const getProductByID = (array, category) => {
    return array.map((product) => {
      if (product.category == category) {
        return setProductData((productData) => [...productData, product]);
      }
    });
  };

  // Renderiza la los detalles de un item en particular que recibe como prop
  return (
    <section className="cards-container">
      {productData.map((product) => {
        return (
          <Link to={`/${product.category}`}>
            {/* Cuando se haga click sobre el producto va a llamar a la función que muestra el detalle del mismo */}
            <Item
              id={productData.id}
              imgUrl={productData.imgUrl}
              title={productData.title}
              brand={productData.brand}
              model={productData.model}
              price={productData.price}
              stock={productData.stock}
              description={productData.description}
            />
          </Link>
        );
      })}
    </section>
  );
}

export default CategoryPage;
