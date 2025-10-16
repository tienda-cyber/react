import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa íconos específicos (asegúrate de que estas librerías estén instaladas en tu proyecto)
import { faReact, faJs, faCss3Alt, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons'; // Añadidos Node y Python
import { faCode } from '@fortawesome/free-solid-svg-icons';
import datosTemas from '../data'; // Asegúrate de que la ruta es correcta

// Función auxiliar para obtener el ícono basado en el nombre del tema (CORREGIDO)
const getIconClass = (nombre) => {
    if (!nombre) return faCode; // Fallback si el nombre es nulo o indefinido

    const lowerCaseName = nombre.toLowerCase();

    if (lowerCaseName.includes('react')) {
        return faReact;
    } else if (lowerCaseName.includes('javascript') || lowerCaseName.includes('js')) {
        return faJs;
    } else if (lowerCaseName.includes('css')) {
        return faCss3Alt;
    } else if (lowerCaseName.includes('node')) { // Agregado Node.js
        return faNodeJs;
    } else if (lowerCaseName.includes('python')) { // Agregado Python
        return faPython;
    }
    return faCode; // Ícono genérico por defecto
};

const ListadoTemas = ({ mostrarDetalle, cerrarSesion }) => {

    const temas = datosTemas; 

    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-10 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Encabezado y Botón de Acción */}
                <div className="flex justify-between items-center mb-10 border-b border-gray-700 pb-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        <span className="text-indigo-400">Explora</span> Nuestros Temas
                    </h1>
                    <button
                        onClick={cerrarSesion}
                        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
                    >
                        Cerrar Sesión
                    </button>
                </div>
                
                {/* Rejilla de Temas (Responsive Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {temas.map((tema) => (
                        <div 
                            key={tema.id}
                            className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-indigo-500/50 cursor-pointer border border-gray-700"
                            onClick={() => mostrarDetalle(tema)}
                        >
                            {/* IMAGEN: Usando tema.imagen */}
                            <img
                                src={tema.imagen || "https://placehold.co/600x250/333333/FFFFFF?text=Contenido+Visual"}
                                alt={`Imagen de ${tema.nombre}`}
                                className="w-full h-40 object-cover"
                            />
                            
                            <div className="p-6">
                                {/* Nombre del Tema */}
                                <h2 className="text-2xl font-bold mb-2 text-indigo-400">
                                    {tema.nombre}
                                </h2>
                                
                                {/* Descripción Corta */}
                                <p className="text-gray-400 mb-4 text-sm h-12 overflow-hidden">
                                    {tema.descripcion}
                                </p>

                                {/* Botón Ver Detalle */}
                                <button
                                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                                    onClick={(e) => { e.stopPropagation(); mostrarDetalle(tema); }}
                                >
                                    Ver Detalle
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
            {/* Pie de Página Sencillo */}
            <div className="text-center mt-12 pt-6 border-t border-gray-800">
                <p className="text-gray-500 text-sm">© 2025 Recursos Educativos. Todos los derechos reservados.</p>
            </div>
        </div>
    );
};

export default ListadoTemas;