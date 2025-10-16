import React from 'react';

/**
 * Componente Dashboard
 * Muestra las opciones principales después del login.
 * @param {function} mostrarListado - Función para cambiar a la vista de Listado de Temas.
 * @param {function} cerrarSesion - Función para cerrar la sesión.
 */
const Dashboard = ({ mostrarListado, cerrarSesion }) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-gray-50">
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md text-center">
                <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
                    ¡Bienvenido!
                </h1>
                <p className="text-gray-600 mb-8 text-lg">
                    Has iniciado sesión correctamente. Explora los recursos educativos.
                </p>
                
                <div className="space-y-4">
                    <button
                        onClick={mostrarListado}
                        className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01]"
                    >
                        Listado de Temas
                    </button>
                    
                    <button
                        onClick={cerrarSesion}
                        className="w-full py-3 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-[1.01]"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
