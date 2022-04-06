// Esta página filtra los objetos según la categoría que obtiene mediante useParams y los renderiza

import { useParams } from "react-router-dom";
import ItemListContainer from "../components/Main/ItemListContainer";

function CategoryPage() {
  const {category} = useParams;

  return <ItemListContainer >Filtraste por: {category}</ItemListContainer>;
}

export default CategoryPage;
