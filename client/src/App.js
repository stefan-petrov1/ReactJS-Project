import { Route, Routes } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Cart } from './components/cart/Cart';
import { Catalog } from './components/catalog/Catalog';
import { CatalogDetails } from './components/catalog/catalog-details/CatalogDetails';
import { Footer } from './components/common/footer/Footer';
import { HamburgerMenu } from './components/common/hamburger-menu/HamburgerMenu';
import { Navbar } from './components/common/navbar/Navbar';
import { SearchBar } from './components/common/search-bar/SearchBar';
import { CreateEditPost } from './components/create-edit-post/CreateEditPost';
import { Home } from './components/home/Home';

function App() {
  return (
    <>
      <HamburgerMenu />
      <header>
        <Navbar />
        <SearchBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/catalog" element={<Catalog />}>
            <Route path=":id" element={<CatalogDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/create" element={<CreateEditPost />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
