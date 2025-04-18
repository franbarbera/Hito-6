import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, ingredients, img });
  };

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price.toLocaleString("es-CL")}</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="btn-container">
          <Link to={`/pizza/${id}`} className="btn btn-primary">
            Ver más
          </Link>
          <button className="btn btn-secondary" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
