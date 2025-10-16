import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa íconos específicos (asegúrate de que estas librerías estén instaladas en tu proyecto)
import { faReact, faJs, faCss3Alt, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons'; // Añadidos Node y Python
import { faCode } from '@fortawesome/free-solid-svg-icons';

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

const ListadoTemas = ({ datos, onSeleccionarTema }) => {
    return (
        // Contenedor principal para la vista de listado
        <div className="py-6">
            <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
                Explora Nuestros Temas Educativos
            </h2>
            
            {/* Contenedor de la cuadrícula, responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {datos.map(tema => (
                    // Tarjeta individual del tema
                    <div
                        key={tema.id}
                        className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden cursor-pointer 
                                   transition duration-300 transform hover:scale-[1.03] hover:shadow-indigo-500/50 
                                   border border-indigo-700/50"
                        onClick={() => onSeleccionarTema(tema)}
                    >
                        {/* Imagen del tema */}
                        <div className="h-48 bg-gray-700 flex items-center justify-center">
                            <img 
                                src={tema.imagen} 
                                alt={`Imagen de ${tema.nombre}`} 
                                className="w-full h-full object-cover"
                                // Fallback para la imagen en caso de error
                                onError={(e) => { 
                                    e.target.onerror = null; 
                                    e.target.src = "https://placehold.co/800x400/374151/FFFFFF?text=No+Image"; 
                                }}
                            />
                        </div>
                        
                        <div className="p-6">
                            {/* Título */}
                            <h3 className="text-2xl font-bold text-indigo-400 mb-2">
                                {tema.nombre}
                            </h3>
                            {/* Descripción */}
                            <p className="text-gray-400 text-sm h-12 overflow-hidden">
                                {tema.descripcion}
                            </p>
                            
                            {/* Botón de acción */}
                            <button 
                                className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                                           py-2 rounded-lg transition duration-200 transform hover:scale-[1.01] 
                                           shadow-md shadow-indigo-500/30"
                            >
                                Ver Detalle
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListadoTemas;