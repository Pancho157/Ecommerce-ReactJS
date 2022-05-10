import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Componentes
import ItemDetail from "./ItemDetail";

// Styles
import "./styles/ItemDetailContainer.css";

// Firebase
import database from "../../data/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer({}) {
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

  return (
    <>
      <main className="detailItem-main">
        <ItemDetail data={productData} />
      </main>
    </>
  );
}
