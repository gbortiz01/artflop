import './App.css'
import React from 'react';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './components/item';

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route exact path="/" element={<ItemListContainer greting='Bienvenidos/as!'/>} />
      <Route exact path="/ArtFlop" element={<ItemListContainer greting='Art-Flop'/>} />
      <Route exact  path="/category/:categoryId" element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
     </BrowserRouter>
    
  );
}

export default App;



