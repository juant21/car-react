import React from 'react';
import Header from './componentes/header';
import Footer from './componentes/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Resto del contenido de la aplicación */}
      <Footer />
    </div>
  );
}

export default App;

