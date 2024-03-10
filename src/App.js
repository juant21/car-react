import React from 'react';
import Header from './componentes/header';
import Footer from './componentes/footer';
import './App.css';

import {ShoppingCartProvider } from './context/carShoppingContext';

function App() {
  return (
    <ShoppingCartProvider>
    <div className="App">
      <Header />
      {/* Resto del contenido de la aplicación */}
      <Footer />
    </div>
    </ShoppingCartProvider>
  );
}

export default App;

