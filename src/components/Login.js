// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de validación básica
        if (usuario === 'admin' && contrasena === '1234') {
            onLogin(usuario, contrasena);
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    };

    return (
        <div className="login-container"> {/* Asumiendo que tenías un contenedor */}
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                <button type="submit" className="btn-ancho-completo">Entrar</button>
            </form>
        </div>
    );
};

export default Login;