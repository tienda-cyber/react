import temas from '../data';

const ListadoTemas = () => (
  <div>
  <h2>Listado de Temas</h2>
  {temas.map((tema) => (
    <div key={tema.id} className="tema-card">
      <h3>{tema.titulo}</h3>
      <p>{tema.descripcion}</p>
    </div>
  ))}
  <button onClick={volver} style={{ marginTop: '20px' }}>Volver al Dashboard</button>
</div>
);

export default ListadoTemas;