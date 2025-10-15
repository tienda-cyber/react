// src/components/DetalleTema.js
import React from 'react';

const DetalleTema = ({ tema, volverAListado }) => {
  if (!tema) {
    return <p>Selecciona un tema para ver los detalles.</p>;
  }

  return (
    <div className="detalle-card">
      {/* Botón de retroceso */}
      <button onClick={volverAListado} className="compact-button">
        &larr; Volver al Listado
      </button>

      {/* Imagen del Tema */}
      {tema.imagen_url && (
        <img 
          src={tema.imagen_url} 
          alt={`Imagen representativa de ${tema.titulo}`} 
          className="detalle-tema-imagen"
          // Fallback en caso de que la imagen no cargue
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x250/cccccc/000000?text=No+Image" }}
        />
      )}

      {/* Título y Descripción */}
      <h2>{tema.titulo}</h2>
      <p style={{ fontSize: '1.1em', color: '#555' }}>{tema.descripcion}</p>

      <hr style={{ margin: '20px 0' }} />

      {/* Contenido Extendido */}
      <h3>Contenido Extendido</h3>
      <p>{tema.contenido_extendido}</p>

      {/* Código de Ejemplo */}
      {tema.codigo_ejemplo && (
        <>
          <h3>Código de Ejemplo</h3>
          <div className="codigo-bloque">
            {/* Usamos <pre> y <code> para preservar el formato del código */}
            <pre><code>{tema.codigo_ejemplo}</code></pre>
          </div>
        </>
      )}
      
      {/* Botón de retroceso al final */}
      <button onClick={volverAListado} className="compact-button">
        &larr; Volver al Listado
      </button>

    </div>
  );
};

export default DetalleTema;
