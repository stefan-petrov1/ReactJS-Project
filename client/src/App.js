import { Route, Routes } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { Logout } from './components/auth/Logout';
import { Register } from './components/auth/Register';
import { Cart } from './components/cart/Cart';
import { Catalog } from './components/catalog/Catalog';
import { CatalogDetails } from './components/catalog/catalog-details/CatalogDetails';
import { Footer } from './components/common/footer/Footer';
import { HamburgerMenu } from './components/common/hamburger-menu/HamburgerMenu';
import { Navbar } from './components/common/navbar/Navbar';
import { ProtectedRoute } from './components/common/protected-route/ProtectedRoute';
import { SearchBar } from './components/common/search-bar/SearchBar';
import { CreateEditPost } from './components/create-edit-post/CreateEditPost';
import { Home } from './components/home/Home';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <HamburgerMenu />
      <header>
        <Navbar />
        <SearchBar />
      </header>
      <main>
        <Routes>
          {/* Everyone */}
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path=":id" element={<CatalogDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />

          {/* Only guests */}
          <Route element={<ProtectedRoute onlyUser={false} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Only users */}
          <Route element={<ProtectedRoute onlyUser={true} />}>
            <Route path="/create" element={<CreateEditPost />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;
