import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>🍕 404 - ¡Oops!</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
