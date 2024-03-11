const Item = ({ producto }) => {
  const { name, price, imgUrl, } = producto;

  return (
    <div className="item">
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;

