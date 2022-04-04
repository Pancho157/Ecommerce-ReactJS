import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";   Para generar los links entre páginas (deben estar contenidas dentro del BrowseRouter, o alguno de los contenedores padres)

// Components
import NavBar from "./components/NavBar/NavBar";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import DetailPage from "./pages/FilteredItems";
import ItemPage from "./pages/ItemPage";
import ItemSell from "./pages/ItemSell";
import SellList from "./pages/SellList";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import CategoriesPage from "./pages/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/carrito" element={<Cart />} /> */}
          {/* <Route path="/contacto" element={<Contact />} /> */}
          <Route path="/:categoty/:id" element={<DetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          {/* <Route path="/detalle" element={<ItemPage />} /> */}
          {/* <Route path="/venta/item" element={<ItemSell />} /> */}
          {/* <Route path="/ventas/items" element={<SellList />} /> */}

          {/* Todo lo que no esté definido arriba va a entrar a la siguiente ruta */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
