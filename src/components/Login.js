// Login.js
import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Lógica de Verificación Local (usando tus credenciales 'admin'/'1234')
    if (usuario === 'admin' && clave === '1234') {
      onLogin(true); // Autenticación exitosa
      return;
    } else {
      alert('Credenciales incorrectas. Intenta con admin/1234');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      />
      {/* Botón de Login (usa la clase para ancho completo) */}
      <button type="submit" className="btn-ancho-completo">Entrar</button>
    </form>
  );
};

export default Login;