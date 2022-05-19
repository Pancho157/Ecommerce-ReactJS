import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import database from "../data/firebase";
import { useNavigate } from "react-router-dom";
import Item from "../components/Main/Item";

function Offers() {
  const navigate = useNavigate();
  const [offerProducts, setOfferProducts] = useState([]);
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
    setOfferProducts([]);

    getProducts().then((productos) => {
      filterOfferProducts(productos);
    });
  }, []);

  return (
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
  );
}

export default Offers;
