// src/components/ListadoTemas.js
import temas from '../data'; 

// Aceptamos la nueva prop: onSeleccionarTema
const ListadoTemas = ({ volver, onSeleccionarTema }) => ( 
  <div>
    <h2>Listado de Temas</h2>
    
    <button 
        onClick={volver} 
    >
        &larr; Volver al Dashboard 
    </button> 

    {/* Mapeo de la lista de temas */}
    {temas.map((tema) => (
      <div 
            key={tema.id} 
            className="tema-card tema-card-clickable" 
            // NUEVA FUNCIONALIDAD: Al hacer clic, se llama a onSeleccionarTema con el objeto completo del tema.
            onClick={() => onSeleccionarTema(tema)}
        >
        <h3>{tema.titulo}</h3>
        <p>{tema.descripcion}</p>
      </div>
    ))}
  </div>
);

export default ListadoTemas;