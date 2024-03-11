//juan esteban tuiran tobias
import React from 'react';

import Header from './componentes/header';
import Footer from './componentes/footer';
import productos from './componentes/productos';
import ItemList from './componentes/itemList';
import Carrito from "./componentes/carrito";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Productos:</h1>
      <ItemList listaProductos={productos} />
      <Carrito/>
      <Footer />
    </div>
  );
}

export default App;
