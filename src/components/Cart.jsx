import "./Cart.css";
import { useCart } from "./CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCart();

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de compras</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price.toLocaleString()}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>➖</button>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>➕</button>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay pizzas en el carrito 🍕</p>
      )}
      {cartItems.length > 0 && (
        <>
          <h3 className="total">Total: ${getTotalPrice().toLocaleString()}</h3>
          <button className="pay-button">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;
