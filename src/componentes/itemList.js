import React, { useState, useEffect } from "react";
import { Item } from "./Item"; 

const obtenerProductos = async () => {
  const respuesta = await fetch("./data/productos.json");
  const datos = await respuesta.json();
  return datos;
};

export const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const productosObtenidos = await obtenerProductos();
      setProductos(productosObtenidos);
    };

    obtenerDatos();
  }, []);

  return (
    <div className="item-list">
      {productos.map((producto) => (
        <Item
          key={producto.id} 
          name={producto.name}
          price={producto.price}
          id={producto.id}
          imgUrl={producto.imgUrl}
        />
      ))}
    </div>
  );
};
