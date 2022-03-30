import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";   Para generar los links entre páginas (deben estar contenidas dentro del BrowseRouter, o alguno de los contenedores padres)

// Components
import NavBar from "./components/NavBar/NavBar";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import FilteredItems from "./pages/FilteredItems";
import ItemDetail from "./pages/ItemDetail";
import ItemSell from "./pages/ItemSell";
import SellList from "./pages/SellList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Cart.js" element={<Cart />} /> */}
          {/* <Route path="/Contact.js" element={<Contact />} /> */}
          {/* <Route path="/FilteredItems.js" element={<FilteredItems />} /> */}
          {/* <Route path="/ItemDetail.js" element={<ItemDetail />} /> */}
          {/* <Route path="/ItemSell.js" element={<ItemSell />} /> */}
          {/* <Route path="/SellList.js" element={<SellList />} /> */}

          {/* Todo lo que no esté definido arriba va a entrar a la siguiente ruta */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
