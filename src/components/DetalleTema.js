// src/components/DetalleTema.js

import React from 'react';

const DetalleTema = ({ tema, volver }) => {
    // Si no hay tema seleccionado, muestra un mensaje (protección)
    if (!tema) {
        return (
            <div className="detalle-card">
                <h2>Error</h2>
                <p>No se ha seleccionado ningún tema.</p>
                <button onClick={volver} className="btn-volver">
                    ← Volver al Listado
                </button>
            </div>
        );
    }

    // Usamos las propiedades del tema, incluyendo el contenido_extendido y codigo_ejemplo
    const contenidoPrincipal = tema.contenido_extendido || "No hay contenido extendido disponible para este tema.";
    const codigoEjemplo = tema.codigo_ejemplo || "No hay código de ejemplo disponible.";

    return (
        <div className="detalle-card">
            <button onClick={volver} className="btn-volver" aria-label="Volver al Listado">
                ← Volver al Listado
            </button>
            
            {/* SOLUCIÓN AL PROBLEMA DE LA IMAGEN: Renderiza la URL correctamente */}
            {tema.imagen_url && (
                <img 
                    src={tema.imagen_url} 
                    alt={`Imagen representativa de ${tema.titulo}`} 
                    className="detalle-imagen"
                />
            )}
            
            <h2>{tema.titulo}</h2>
            
            <p className="detalle-descripcion">{tema.descripcion}</p>

            <hr />

            <h3>Contenido Extendido</h3>
            <p>{contenidoPrincipal}</p>

            <h3>Código de Ejemplo</h3>
            <div className="codigo-bloque">
                <pre><code>{codigoEjemplo}</code></pre>
            </div>

            {/* Botón de navegación al final */}
            <button onClick={volver} className="btn-ancho-completo" style={{marginTop: '20px'}}>
                ← Volver al Listado Principal
            </button>
        </div>
    );
};

export default DetalleTema;
