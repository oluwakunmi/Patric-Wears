import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<ShopCategory category="Men"/>}/>
        <Route path='/Women' element={<ShopCategory category="Women"/>}/>
        <Route path='/Kids' element={<ShopCategory category="Kids"/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
