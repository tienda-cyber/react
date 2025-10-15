import React, { useState } from 'react';

// Supongo que tienes una función de autenticación en las props
const Login = ({ onLogin }) => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Simulación de autenticación
        if (usuario === 'admin' && contrasena === '1234') {
            onLogin(usuario, contrasena); // Llama a la función de login exitoso
        } else {
            setError('Credenciales incorrectas. Usa: admin / 1234');
        }
    };

    return (
        // Contenedor principal: Fondo oscuro que ocupa toda la pantalla y centra el contenido
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            
            {/* Tarjeta de Login */}
            {/* Fondo más oscuro, sombra intensa para efecto flotante */}
            <div className="w-full max-w-sm bg-gray-800 border border-gray-700 shadow-2xl shadow-indigo-500/50 rounded-2xl p-8 md:p-10 transition duration-500 hover:shadow-indigo-500/70">
                
                <h2 className="text-3xl font-extrabold text-white text-center mb-2">
                    Bienvenido
                </h2>

                <p className="text-center text-sm text-indigo-400 font-semibold mb-8">
                    Accede a tus recursos educativos
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Campo Usuario */}
                    <div>
                        <label htmlFor="usuario" className="block text-sm font-medium text-gray-300 mb-1">
                            Usuario
                        </label>
                        <input
                            id="usuario"
                            name="usuario"
                            type="text"
                            required
                            // Estilo de input: fondo oscuro, texto blanco, borde de color
                            className="block w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 placeholder-gray-400"
                            placeholder="Introduce tu usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>

                    {/* Campo Contraseña */}
                    <div>
                        <label htmlFor="contrasena" className="block text-sm font-medium text-gray-300 mb-1">
                            Contraseña
                        </label>
                        <input
                            id="contrasena"
                            name="contrasena"
                            type="password"
                            required
                             // Estilo de input: fondo oscuro, texto blanco, borde de color
                            className="block w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 placeholder-gray-400"
                            placeholder="Introduce tu contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>

                    {/* Mensaje de Error */}
                    {error && (
                        <p className="text-sm text-red-400 font-medium text-center bg-red-900/40 p-3 rounded-lg border border-red-700">
                            {error}
                        </p>
                    )}

                    {/* Botón de Enviar */}
                    <div>
                        <button
                            type="submit"
                            // Botón con color índigo, sombra y efecto de escala al pasar el ratón
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800 transition duration-200 transform hover:scale-[1.01]"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;
