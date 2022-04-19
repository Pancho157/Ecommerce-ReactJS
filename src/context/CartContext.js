import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [modifiedArray, setModifiedArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    // Verifica que si existe el producto que se le pasó por props en el array
    let exist = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (exist) {
      const modifiedArray = cartProducts.filter((cartProduct) => {
        // Mira cual es el producto que tiene la propiedad modificada y devuelve un array con la propiedad ya modificada
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          };
        }
        // Coloca el nuevo array (ya modificado) como el array del carrito
        setCartProducts(modifiedArray);
        totalToPay();
      });
    } else {
      // En caso de no existir otro artículo con el mismo id lo agrega al array del carrito
      setCartProducts((cartProducts) => [...cartProducts, product]);
    }
  };

  const deleteProductFromCart = (product) => {
    // Establece en el array todos los productos que no tengan el id del producto que se pasó por prop
    cartProducts.map((cartProduct) => {
      if (cartProduct.id !== product.id) {
        setModifiedArray(...modifiedArray, cartProduct);
      }

      setCartProducts(modifiedArray);
      totalToPay();
    });

    totalToPay();
  };

  const totalToPay = () => {
    // deja vacío el array para colocar los precios después
    setCartProducts([]);
    cartProducts.map((cartProduct) => {
      const productFinalPrice = cartProduct.price * cartProduct.quantity;
      setTotalPrice(totalPrice + productFinalPrice);
    });
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
