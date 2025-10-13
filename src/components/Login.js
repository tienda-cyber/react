import { useState } from 'react';
import { iniciarSesion } from '../authservice'; // Asegúrate de tener este archivo creado

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();

    // Verificación local (la que ya tienes)
    if (usuario === 'admin' && clave === '1234') {
      onLogin(true);
      return;
    }

    // Verificación con Firebase
    try {
      await iniciarSesion(usuario, clave);
      onLogin(true);
    } catch (error) {
      alert('Credenciales incorrectas o error de Firebase: ' + error.message);
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
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;