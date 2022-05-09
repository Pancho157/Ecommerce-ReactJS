// Este archivo simula una llamada a una API, recorre los productos (array de objetos) y pasa la información al componente <Item />, el cual los renderiza
// También actua como un contenedor de segundo nivel de las Cards (El de primer nivel es el <main></main>)

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import Item from "./Item";

// Styles
import "./styles/ItemList.css";

// Firebase
import database from "../../data/firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemList = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const itemsCollection = collection(database, "productos");
    const productosSnapshot = await getDocs(itemsCollection);
    const productList = productosSnapshot.docs.map((doc) => {
      let product = doc.data();
      return product;
    });
    return productList;
  };

  const filterProductsByCategory = (array, category) => {
    return array.map((product) => {
      if (product.category == category) {
        return setProducts((products) => [...products, product]);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    setProducts([]);

    getProducts().then((productos) => {
      setLoading(false);
      category
        ? filterProductsByCategory(productos, category)
        : setProducts(productos);
    });
  }, [category]);

  const changeToDetailPage = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  // Renderiza los items recorriendo el array de poroductos
  return (
    <section className="cards-container">
      {loading ? (
        <>
          <h2>Cargando...</h2>
          <img
            className="loader"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULkw68WhWUaUu0yvFxWl9KfocVcEa00VPGg&usqp=CAU"
            }
            alt={"Loader"}
          />
        </>
      ) : (
        <>
          {products.map((product) => {
            return (
              <div
                key={product.id}
                onClick={() => {
                  changeToDetailPage(product.category, product.id);
                }}
              >
                <Item
                  id={product.id}
                  imgUrl={product.imgUrl}
                  title={product.title}
                  brand={product.brand}
                  model={product.model}
                  price={product.price}
                  stock={product.stock}
                  description={product.description}
                  quantity={product.quantity}
                />
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};

export default ItemList;
