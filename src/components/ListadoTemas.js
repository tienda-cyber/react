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
    // Estado para la búsqueda
    const [filtro, setFiltro] = useState('');

    // Validamos que 'datos' sea un array antes de intentar filtrarlo
    const temasFiltrados = Array.isArray(datos)
        ? datos.filter(tema =>
              // CORREGIDO: Usar tema.nombre en lugar de tema.titulo
              tema.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
              tema.descripcion.toLowerCase().includes(filtro.toLowerCase())
          )
        : []; // Si no es un array, usamos un array vacío

    return (
        <div className="listado-container">
            {/* Barra de Búsqueda */}
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Buscar temas..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Grid de Temas */}
            <div className="temas-grid">
                {temasFiltrados.length > 0 ? (
                    temasFiltrados.map((tema) => (
                        <div 
                            key={tema.id} 
                            className="card tema-card" 
                            onClick={() => onSeleccionarTema(tema)}
                        >
                            <div className="card-icon">
                                {/* CORREGIDO: Usar tema.nombre para obtener el ícono */}
                                <FontAwesomeIcon icon={getIconClass(tema.nombre)} />
                            </div>
                            {/* CORREGIDO: Usar tema.nombre en el título */}
                            <h3 className="card-title">{tema.nombre}</h3>
                            <p className="card-description">{tema.descripcion}</p>
                            <button className="btn-secondary">Ver Detalle</button>
                        </div>
                    ))
                ) : (
                    <p className="text-center w-full">No se encontraron temas.</p>
                )}
            </div>
        </div>
    );
};

export default ListadoTemas;