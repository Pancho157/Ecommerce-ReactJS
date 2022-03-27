import React, { useEffect, useState } from "react";
import { mainPageProducts } from "../../data/data";
import Item from "./Item";
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
  }, []);
  // Llama a la función que almacena los datos en el array products, los recorre con el map y los renderiza con el <Item data={product} />
  // Al <Item data={product} /> se le pasan todos los datos porque la idea es implementar una función que muestre todos los datos del artículo cuando uno le hace click al <article> de la card
  return (
    <div className="cards-container">
      {products.map((product) => {
        return (
          <div key={product.id} disabled={true}>
            <Item data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
