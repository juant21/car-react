import React from 'react';
import Item from './Item';

const ItemList = ({ listaProductos }) => {
  return (
    <div className="item-list">
      {listaProductos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;


