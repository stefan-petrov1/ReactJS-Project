import { Route, Routes } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Catalog } from './components/catalog/Catalog';
import { Footer } from './components/common/footer/Footer';
import { Navbar } from './components/common/navbar/Navbar';
import { SearchBar } from './components/common/search-bar/SearchBar';
import { Home } from './components/home/Home';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <SearchBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
