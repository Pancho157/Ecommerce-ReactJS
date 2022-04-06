// Esta página tiene el objetivo de mostrar el detalle de un componente Item (sobre el que hagamos click)
// Funciona obteniendo el id del item, luego lo busca en el array y renderiza toda su información 

// Components
import ItemDetailContainer from "../components/Main/ItemDetailContainer";

// En el caso del home no es muy complejo debido a que el navbar y el footer se mantienen siempre renderizados
function ItemPage() {
  return (
    <>
      <ItemDetailContainer />
    </>
  );
}

export default ItemPage;