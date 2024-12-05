import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddProduct from './components/pages/AddProduct';
import ProductList from './components/pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className='flex gap-12'>
        <Sidebar />
        <Routes>
        <Route path="/" element={<AddProduct/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/productlist" element={<ProductList/>} />
        </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
