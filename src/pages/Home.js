// Components
import Main from "..//components/Main/ItemListContainer";

// En el caso del home no es muy complejo debido a que el navbar y el footer se mantienen siempre renderizados
function Home() {
  return (
    <>
      <Main>Nuestros Productos</Main>
      {/* <ItemDetailContainer /> */}
    </>
  );
}

export default Home;
