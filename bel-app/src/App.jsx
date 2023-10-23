import './App.css'
import React from 'react';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route exact path="/" element={<ItemListContainer greting='Bienvenidos/as!'/>} />
      <Route exact path="/ArtFlop" element={<ItemListContainer greting='Art-Flop'/>} />
      <Route exact  path="/category/:categoryId" element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart />} />
       <Route path="/checkout" element={<Checkout />} />
      </Routes>
     </BrowserRouter>
    
  );
}

export default App;



