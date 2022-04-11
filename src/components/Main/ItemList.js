// Este archivo simula una llamada a una API, recorre los productos (array de objetos) y pasa la información al componente <Item />, el cual los renderiza
// También actua como un contenedor de segundo nivel de las Cards (El de primer nivel es el <main></main>)

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import { mainPageProducts } from "../../data/data";
import Item from "./Item";

// Styles
import "./styles/ItemList.css";

const ItemList = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

      setLoading(false);
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

  // Utilizo esta manera de navegar en vez de <Link> debido a que con <Link> no es posible utilizar el stopPropagation para agregar la funcionalidad del ItemCount
  const changeToDetailPage = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  // Llama a la función que almacena los datos en el array products, los recorre con el map y los renderiza con el <Item {props} />
  return (
    <section className="cards-container">
      {/* Recorre el resultado de array luego de pasar por el filtro (si es que pasa) y lo renderiza */}
      {products.map((product) => {
        return (
          <div
            onClick={() => {
              changeToDetailPage(product.category, product.id);
            }}
          >
            {/* //  Todo: Ver por qué no funciona el loader
                    Recordar cambiar el loading en la respuesta de la promesa y en el useState */}
            {loading && (
              <div>
                <p>Cargando artículos</p>
                <img
                  className="loader-exterior"
                  src="../../images/loader.jpg"
                  alt="Loader"
                />
                <img
                  className="loader-interior"
                  src="../../images/loader.jpg"
                  alt="Loader"
                />
              </div>
            )}
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
          </div>
        );
      })}
    </section>
  );
};

export default ItemList;
