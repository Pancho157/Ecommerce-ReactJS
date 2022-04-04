// Componentes
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { mainPageProducts } from "../../data/data";
import ItemDetail from "./ItemDetail";

// Styles
import "./styles/ItemDetailContainer.css";
export default function ItemDetailContainer({}) {
  // const [item, setItem] = useState({});



  const { id, category } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductByID(mainPageProducts, id);
  }, []);

  const getProductByID = (array, id) => {
    return array.map((product) => {
      if (product.id == id && product.category == category) {
        return setProductData(product);
      }
    });
  };



  return (
    <>
    {/* Llama a la parte estética del detalle del producto y le pasa los props para rellenar los campos */}
    <main className="detailItem-main">
      <ItemDetail data={productData} />
    </main>
    </>
  );
}
