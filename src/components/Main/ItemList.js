// Este archivo simula una llamada a una API, recorre los productos (array de objetos) y pasa la información al componente <Item />, el cual los renderiza
// También actua como un contenedor de segundo nivel de las Cards (El de primer nivel es el <main></main>)

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import { mainPageProducts } from "../../data/data";
import Item from "./Item";
import ItemDetailContainer from "./ItemDetailContainer";

// Styles
import "./styles/ItemList.css";


const ItemList = () => {
  const [products, setProducts] = useState([]);
  // En products se almacenan los datos de la API (en este caso vienen del archivo data.js)

  const getProducts = new Promise((resolve, reject) => {
    // Trae los productos desde el archivo (data.js) mediante una promesa que se resuelve luego de 2 segundos (solicitado en la consigna)
    setTimeout(() => {
      resolve(mainPageProducts);
    }, 2000);
  });

  const getApiProducts = async () => {
    // Espera a que finalice la promise y almacena los productos en el array vacío (products)
    // No veo el porqué la parte del catch está solo para simular que la API a la cual se simula conectarse falle
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.warn(error);
      alert("No podemos mostrar los productos en este momento");
    }
  };

  useEffect(() => {
    getApiProducts();
  }, []);  // <-- Array de dependencias - Al estar vacío lo que está dentro del useEffect se ejecuta solo una vez (etapa de montaje)
  // Llama a la función que almacena los datos en el array products, los recorre con el map y los renderiza con el <Item data={product} />
  // Al <Item data={product} /> se le pasan todos los datos porque la idea es implementar una función que muestre todos los datos del artículo cuando uno le hace click al <article> que contiene la Card
  return (
    <section className="cards-container">
      {products.map((product) => {
        return (
          <Link to={`/${product.category}/${product.id}`} onClick={ItemDetailContainer}>
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
