import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    console.log("Producto a agregar al carrito: ", product);

    setCartProducts((cartProducts) => [...cartProducts, product]);
    console.log("productos en el carrito: ", cartProducts);
  };

  // data establece los elementos que se van a exportar en el provider
  const data = {
    cartProducts,
    addProductToCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
