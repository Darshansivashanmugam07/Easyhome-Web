
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/electronics' element={<ShopCategory banner={men_banner} category="electronics"/>}/>
          <Route path='/vehicles' element={<ShopCategory banner={women_banner} category="vehicles"/>}/>
          <Route path='/fancy' element={<ShopCategory banner={kid_banner} category="fancy"/>}/>
          <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
