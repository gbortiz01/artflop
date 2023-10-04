import './App.css'
import React from 'react';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route exact path="/" element={<ItemListContainer greting='Bienvenidos/as!'/>} />
      <Route exact  path="/category/:categoryId" element={<ItemListContainer/>} />
      <Route exact path="/llavero "element={<ItemListContainer  />} />
      <Route exact path="/cuadro" element={<ItemListContainer />} />
      <Route path='/:id' element={<ItemDetailContainer/>}/>
      </Routes>
     </BrowserRouter>
    
  );
}

export default App;



