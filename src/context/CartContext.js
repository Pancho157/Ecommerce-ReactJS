import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    let exist = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    // Si el producto existe en el array modifica su cantidad, y si no se encuentra lo agrega
    if (exist) {
      const modifiedArray = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          };
        }
        return cartProduct;
      });
      setCartProducts(modifiedArray);
    } else {
      setCartProducts((cartProducts) => [...cartProducts, product]);
    }

    totalToPay();
  };

  const deleteProductFromCart = (product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product)
    );

    totalToPay();
  };

  const totalToPay = () => {
    setTotalPrice(0);

    // cartProducts.map((cartProduct) => {
    //   const productFinalPrice = cartProduct.price * cartProduct.quantity;
    //   setTotalPrice(totalPrice + productFinalPrice);
    // });
  };

  // data establece los elementos que se van a exportar en el provider
  const data = {
    cartProducts,
    addProductToCart,
    deleteProductFromCart,
    totalPrice,
    setTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
