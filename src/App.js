//juan esteban tuiran tobias
import React from 'react';

import Header from './componentes/header';
import Footer from './componentes/footer';
import productos from './componentes/productos';
import ItemList from './componentes/itemList';
import Carrito from "./componentes/carrito";
import Clima from "./nuevoComponentes/Clima";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carrito/>
      <h1>Productos:</h1>
      <ItemList listaProductos={productos} />
      <Footer />
      
      <Clima />
    </div>
  );
}

export default App;
