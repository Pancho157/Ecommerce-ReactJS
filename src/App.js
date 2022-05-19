import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";   Para generar los links entre páginas (deben estar contenidas dentro del BrowseRouter, o alguno de los contenedores padres)

// Components
import NavBar from "./components/NavBar/NavBar";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import DetailPage from "./pages/ItemPage";
import CategoryPage from "./pages/CategoryPage";
import SearchResultsPage from "./pages/FilteredItems";
import SellingItemsList from "./pages/SellList";
import NotFound from "./pages/NotFound";
import SingIn from "./pages/SingIn";
import Footer from "./components/Footer/Footer";

// Context
import { CartProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/:categoty/:id" element={<DetailPage />} />
              <Route path="/categorias/:category" element={<CategoryPage />} />
              <Route path="/resultado" element={<SearchResultsPage />} />
              <Route path="/ventas/allItems" element={<SellingItemsList />} />
              <Route path="/iniciarSesion" element={<SingIn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
