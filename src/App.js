
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Services from './pages/Services';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import FloatingIcons from "./Components/FloatingIcons";



function App() {
  return (
<>

<Router>
      <FloatingIcons/>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/product"  element={<Product/>} />
      <Route path="/services"  element={<Services/>} />
      <Route path="/faq"  element={<Faq/>} />
       <Route path="/contact"  element={<Contact/>} />
    </Routes>
  </Router>
</>
  );
}

export default App;
