import React, { useState } from 'react';

function Carrito() {
  const [carritoState, setCarritoState] = useState({
      items: [],
      total: 0,
  });

  function agregarAlCarrito(producto) {
    const { items, total } = carritoState;
    const nuevosItems = [...items, producto];
    const nuevoTotal = total + producto.precio;
    setCarritoState({
      items: nuevosItems,
      total: nuevoTotal,
    });
  }
  

  function eliminarDelCarrito(id) {
    const { items, total } = carritoState;
    const nuevosItems = items.filter((item) => item.id !== id);
    const nuevoTotal = total - items.find((item) => item.id === id).precio;
    setCarritoState({
      items: nuevosItems,
      total: nuevoTotal,
    });
  }

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      <ul>
        {carritoState.items.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imgUrl} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>Precio: ${producto.price}</p>
            <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${carritoState.total}</p>
    </div>
  );
}

export default Carrito;
export function agregarAlCarrito;