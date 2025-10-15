// ListadoTemas.js
import temas from '../data'; // Asumo que este archivo existe y exporta un array de temas

const ListadoTemas = ({ volver }) => ( 
  <div>
    <h2>Listado de Temas</h2>
    
    <button 
        onClick={volver} 
        // NO HAY CLASE NI STYLE AQUÍ: USARÁ LA REGLA COMPACTA DEL CSS
    >
        &larr; Volver al Dashboard 
    </button> 

    {/* Mapeo de la lista de temas */}
    {temas.map((tema) => (
      <div key={tema.id} className="tema-card">
        <h3>{tema.titulo}</h3>
        <p>{tema.descripcion}</p>
      </div>
    ))}
  </div>
);

export default ListadoTemas;
