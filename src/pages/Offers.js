import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import database from "../data/firebase";
import { collection, getDocs } from "firebase/firestore";

// Components
import Item from "../components/Main/Item";

// Styles
import "./styles/Offers.css";

function Offers() {
  const navigate = useNavigate();
  const [offerProducts, setOfferProducts] = useState([]);
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

  const changeToDetailPage = (category, id) => {
    navigate(`./${category}/${id}`);
  };

  const filterOfferProducts = (array) => {
    return array.map((product) => {
      if (product.discount != 0) {
        return setOfferProducts((userProducts) => [...userProducts, product]);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    setOfferProducts([]);

    getProducts().then((productos) => {
      setLoading(false);
      filterOfferProducts(productos);
    });
  }, []);

  return (
    <main className="offers-main">
      <h2 className="main-tittle">Productos de oferta</h2>
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
            {offerProducts.map((product) => {
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
    </main>
  );
}

export default Offers;
