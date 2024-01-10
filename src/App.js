
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import NAV from './components/nav';
import { ShopContextProvider } from './components/context/shopcontext';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        
          <NAV/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
     </div>
  );
}

export default App;
