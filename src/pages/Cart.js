// Este archivo tiene el fin de traer los elementos que se encuentran incluidos en el array destinado al carrito y brindar las funcionalidades para la renderización del archivo hijo

import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

// Styles
import "./styles/Cart.css";

// Icons
import { FaTrashAlt } from "react-icons/fa";

// Context
import { useContext, useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "../components/Main/Modal";

// Firebase conextion
import database from "../data/firebase";
import { addDoc, collection } from "firebase/firestore";

function Cart() {
  const navigate = useNavigate();
  let [modalIsOpen, openModal, closeModal] = useModal(false);
  let [cartIsEmpty, setCartIsEmpty] = useState(false);
  const [successOrder, setSuccessOrder] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { cartProducts, deleteProductFromCart, totalPrice } =
    useContext(CartContext);

  const [order, setOrder] = useState({
    buyer: formData,
    items: cartProducts.map((cartProduct) => {
      return {
        id: cartProduct.id,
        title: cartProduct.title,
        price: cartProduct.price,
        quantity: cartProduct.quantity,
      };
    }),
    date: new Date().toLocaleDateString(),
    total: totalPrice,
  });

  // Funciones
  const deleteProduct = (e, cartProduct) => {
    e.stopPropagation();
    deleteProductFromCart(cartProduct);
  };

  const changeToDetailPage = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    setOrder({
      buyer: formData,
      items: cartProducts.map((cartProduct) => {
        return {
          id: cartProduct.id,
          title: cartProduct.title,
          price: cartProduct.price,
          quantity: cartProduct.quantity,
        };
      }),
      date: new Date().toLocaleDateString(),
      total: totalPrice,
    });

    pushOrder();
    closeModal();
  };

  const pushOrder = async () => {
    const orderFirebase = collection(database, "ordenesDeCompra");
    const orderDoc = await addDoc(orderFirebase, order);
    setSuccessOrder(orderDoc.id);
  };

  useEffect(() => {
    if (cartProducts[0] !== undefined) {
      setCartIsEmpty(true);
    }
  }, []);

  // Renderizado
  return (
    <>
      <Modal isOpen={modalIsOpen} closeModal={closeModal}>
        {successOrder ? (
          <div>
            <h2 className="cart-buyFormTitle">Compra Exitosa!!</h2>
            <p className="cart-buySuccess">
              Felicidades!! La orden de compra se generó correctamente
            </p>
            <p className="cart-buySuccess">
              Su número de orden es: {successOrder}
            </p>
          </div>
        ) : (
          <div className="cart-modalContainer">
            <h2 className="cart-buyFormTitle">Finalizar compra</h2>

            <form className="cart-form">
              <input
                type="text"
                placeholder="Nombre"
                className="cart-formInput"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="phone"
                placeholder="Teléfono"
                className="cart-formInput"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="mail"
                placeholder="Email"
                className="cart-formInput"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="cart-formButton"
                onClick={sendForm}
              >
                ENVIAR
              </button>
            </form>
          </div>
        )}
      </Modal>

      <div className="cart-itemsContainer">
        <h2 className="cart-mainTitle">Carrito de Compras</h2>

        <p className="cart-emptyMessage">
          {cartIsEmpty === false
            ? "Actualmente el carrito se encuentra vacío!"
            : "Los productos agregados al carrito se encuentran debajo"}
        </p>
        {cartProducts.map((cartProduct) => {
          return (
            <article
              onClick={() => {
                changeToDetailPage(cartProduct);
              }}
              key={cartProduct.id}
            >
              <div className="cart-container">
                <img
                  className="cart-img"
                  src={cartProduct.imgUrl}
                  alt={cartProduct.title}
                />
                <div className="cart-middleContainer">
                  <b className="cart-title">{cartProduct.title}</b>
                  <p className="cart-price">Precio: {cartProduct.price}</p>
                  <p className="cart-stock">Stock: {cartProduct.stock}</p>
                  <p className="cart-quantity">
                    Cantidad: {cartProduct.quantity}
                  </p>
                </div>

                <button
                  className="cart-trashButton"
                  onClick={(e) => deleteProduct(e, cartProduct.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </article>
          );
        })}

        <div className="cart-totalContainer">
          <h3 className="cart-total">
            <b>Total:</b> $ {totalPrice}
          </h3>
          <button className="cart-buyButton" onClick={openModal}>
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
