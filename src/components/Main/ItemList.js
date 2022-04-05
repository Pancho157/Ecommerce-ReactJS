// Este archivo simula una llamada a una API, recorre los productos (array de objetos) y pasa la información al componente <Item />, el cual los renderiza
// También actua como un contenedor de segundo nivel de las Cards (El de primer nivel es el <main></main>)

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Components
import { mainPageProducts } from "../../data/data";
import Item from "./Item";
import ItemDetailContainer from "./ItemDetailContainer";

// Styles
import "./styles/ItemList.css";

const ItemList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    // Trae los productos desde el archivo (data.js) mediante una promesa que se resuelve luego de 2 segundos
    setTimeout(() => {
      resolve(mainPageProducts);
    }, 2000);
  });

  const getApiProducts = async () => {
    // Espera a que finalice la promise y dependiendo de si se pasó algun valor por category (useParams) almacena los productos en el array vacío (products) o los filtra por categoría y los almacena en el array vacío
    try {
      const result = await getProducts;
      setProducts([]);
      // Verifica que se haya pasado un valor por useParams (en category)
      category !== undefined
        ? filterProductsByCategory(mainPageProducts, category)
        : setProducts(result);
    } catch (error) {
      console.warn(error);
      alert("No podemos mostrar los productos en este momento");
    }
  };

  const filterProductsByCategory = (array, category) => {
    return array.map((product) => {
      if (product.category == category) {
        return setProducts((products) => [...products, product]);
      }
    });
  };

  useEffect(() => {
    getApiProducts();
  }, [category]);

  // Llama a la función que almacena los datos en el array products, los recorre con el map y los renderiza con el <Item {props} />
  return (
    <section className="cards-container">

      {/* Recorre el resultado de array luego de pasar por el filtro (si es que pasa) y lo renderiza */}
      {products.map((product) => {
        return (
          <Link
            to={`/${product.category}/${product.id}`}
            onClick={ItemDetailContainer}
          >
            {/* Cuando se haga click sobre el producto va a llamar a la función que muestra el detalle del mismo */}
            <Item
              id={product.id}
              imgUrl={product.imgUrl}
              title={product.title}
              brand={product.brand}
              model={product.model}
              price={product.price}
              stock={product.stock}
              description={product.description}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default ItemList;
