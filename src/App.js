import React from 'react';
import { ItemList } from './componentes/itemList';

import Header from './componentes/header';
import Footer from './componentes/footer';
import './App.css';

import {ShoppingCartProvider } from './context/carShoppingContext';

function App() {
  return (
    <ShoppingCartProvider>
    <div className="App">
      <Header />
      <h1>Productos:</h1>
        <ItemList />  
      <Footer />
    </div>
    </ShoppingCartProvider>
  );
}

export default App;

