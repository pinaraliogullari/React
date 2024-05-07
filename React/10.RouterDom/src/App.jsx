import './App.css'; // CSS dosyasını içe aktarırken doğru dosya yolu kullanılmalı

import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFoundPage'; // Büyük-küçük harf uyumsuzluğunu düzeltin
import Header from './components/Header'; // Büyük-küçük harf uyumsuzluğunu düzeltin

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;