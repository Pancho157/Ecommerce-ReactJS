// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { mainPageProducts } from "../data/data";
// import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import ItemListContainer from "../components/Main/ItemListContainer";

function CategoryPage() {
  const { category } = useParams;

  return <ItemListContainer>Filtraste por: {category}</ItemListContainer>;
}

export default CategoryPage;
