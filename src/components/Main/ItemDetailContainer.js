// Componentes
import { useEffect, useState } from "react";
import { mainPageProducts, mockProduct } from "../../data/data";
import ItemDetail from "./ItemDetail";

// Styles
import "./styles/ItemDetailContainer.css";
export default function ItemDetailContainer({  }) {
  const [item, setItem] = useState({});

  // Trae el array de un solo producto (lo hice así porque el profe dijo que lo hagamos así antes de rompernos la cabeza, ya que iba a ser entregar y cambiarlo)
  const getProduct = () => {
    return new Promise((resolve, reject) => {
      return resolve(mockProduct);
    });
  };

  // Espera a que se resuelva la promesa y almacena el resultado en "item"
  useEffect(() => {
    getProduct()
      .then((productData) => {
        setItem(productData);
      })
      .finally(() => {
        console.log("Termino la llamada");
      });
  }, []); // se ejecuta en la etapa de montaje porque el array de dependencias está vacío

  return (
    <>
    {/* Llama a la parte estética del detalle del producto y le pasa los props para rellenar los campos */}
    <main className="detailItem-main">
      <ItemDetail data={item} />
    </main>
    </>
  );
}
