// Components
import ItemDetailContainer from "../components/Main/ItemDetailContainer";

// En el caso del home no es muy complejo debido a que el navbar y el footer se mantienen siempre renderizados
function FilteredItems() {
  return (
    <>
      <ItemDetailContainer />
    </>
  );
}

export default FilteredItems;