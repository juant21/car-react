const Item = ({ producto }) => {
  const { nombre, precio, imgUrl, } = producto;

  return (
    <div className="item">
      <img src={imgUrl} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;

