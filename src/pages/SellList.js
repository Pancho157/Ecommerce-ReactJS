// Styles
import "./inProgress.css";

// Context
import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import database from "../data/firebase";
import { useNavigate } from "react-router-dom";
function SellingItemsList() {
  const navigate = useNavigate();
  const [loggedInUser, isLoggedIn] = useContext(CartContext);
  const [userProducts, setUserProducts] = useState([]);

  const getProducts = async () => {
    const itemsCollection = collection(database, "productos");
    const productosSnapshot = await getDocs(itemsCollection);
    const productList = productosSnapshot.docs.map((doc) => {
      let product = doc.data();
      return product;
    });
    return productList;
  };

  const filterProductsByUser = (array, user) => {
    return array.map((product) => {
      if (product.creator == user) {
        return setUserProducts((userProducts) => [...userProducts, product]);
      }
    });
  };

  const changeToLoginPage = () => {
    navigate(`./pages/SellList`);
  };

  useEffect(() => {
    setUserProducts([]);

    getProducts().then((productos) => {
      filterProductsByUser(productos, loggedInUser);
    });
  }, []);

  return (
    <div className="SellList--ProductsSection">
      {isLoggedIn ? (
        // Todo: Modificar los articles de los productos para mostrar su info y eliminarlos en este archivo
        // Todo: Hacer los estilos de esta página
        userProducts.map((product) => {
          return (
            <article className="card" productid={product.id}>
              <img
                src={product.imgUrl}
                alt={product.title}
                className={"card-image"}
              ></img>
              <h3 className={"card-tittle"}>{product.title}</h3>
              <p>Marca: {product.brand}</p>
              <p>Modelo: {product.model}</p>
              <p>Precio: $ {product.price}</p>
              <p>Stock actual: {product.stock}</p>
            </article>
          );
        })
      ) : (
        <div className="SellList--ToLoginSection">
          <h2>UPS, no se encuentra iniciada la sesión</h2>
          <p>
            Para poder mostrarle sus productos a la venta es requerido que
            inicie sesión
          </p>
          <button
            className="SellList--ToLoginButton"
            onClick={changeToLoginPage}
          ></button>
        </div>
      )}
    </div>
  );
}

export default SellingItemsList;
