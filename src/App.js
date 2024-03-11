//juan esteban tuiran tobias
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './componentes/header';
import Footer from './componentes/footer';

import productos from './componentes/productos';

import ItemList from './componentes/itemList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Productos:</h1>
      <ItemList listaProductos={productos} />
      <Footer />
    </div>
  );
}

export default App;
