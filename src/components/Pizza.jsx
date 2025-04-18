import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Pizza.css";
import { useCart } from "./CartContext"; // Importa el hook useCart

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // Obtén la función addToCart del contexto

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar la pizza");
        }
        return response.json();
      })
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (pizza) {
      addToCart(pizza);
    }
  };

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!pizza) {
    return null;
  }

  return (
    <div className="pizza-detail">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} />
      <p>Precio: ${pizza.price.toLocaleString("es-CL")}</p>
      <p>Descripción: {pizza.description}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
