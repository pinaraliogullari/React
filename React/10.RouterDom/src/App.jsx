import './App.css';

import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import EmployeeAbout from './Pages/EmployeeAbout';
import CompanyAbout from './Pages/CompanyAbout';
import NotFoundPage from './Pages/NotFoundPage';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} >
          <Route path='employee' element={<EmployeeAbout />} /> {/* nested routeların başına / koyulmaz */}
          <Route path='company' element={<CompanyAbout />} />
        </Route>
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;