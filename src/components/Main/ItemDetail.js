import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Componentes
import ItemCount from "./ItemCount";

// Styles
import "./styles/ItemDetail.css";

// Firebase
import database from "../../data/firebase";
import { doc, getDoc } from "firebase/firestore";

function ItemDetail() {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductByID(id);
  }, []);

  const getProductByID = async (id) => {
    const docRef = doc(database, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProductData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  // Renderiza la los detalles de un item en particular que recibe como prop
  return (
    <>
      <div className="main-container">
        <section className="img-section">
          <img src={productData.imgUrl} alt={productData.title} />
        </section>
        <div className="rightGroupElements">
          <section className="buy-section">
            <h2 className="main-title">{productData.title}</h2>
            <p className="price">Precio: {productData.price}</p>
            <p className="stock">Stock actual: {productData.stock}</p>
            <div className="contador">
              <ItemCount stock={productData.stock} data={productData} />
            </div>
          </section>

          <section className="desc-section">
            <h2 className="description-title">Descripción del producto</h2>
            <p>- Marca: {productData.brand}</p>
            <p>- Modelo: {productData.model}</p>
            <p>- Categoría: {productData.category}</p>
            <p>
              - Descripción:
              <br /> {productData.description}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
