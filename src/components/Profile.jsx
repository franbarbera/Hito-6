import React from "react";

function Profile() {
  const userEmail = "usuario@ejemplo.com";

  return (
    <div style={{ padding: "20px" }}>
      <h2>Perfil de Usuario</h2>
      <p>Email: {userEmail}</p>
      <button>Cerrar Sesión</button>
    </div>
  );
}

export default Profile;
