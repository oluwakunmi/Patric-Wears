import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Hero from './Components/Hero/Hero';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<ShopCategory category="Men"/>}/>
        <Route path='/Women' element={<ShopCategory category="Women"/>}/>
        <Route path='/Kids' element={<ShopCategory category="Kids"/>}/>
        <Route path='/Product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
