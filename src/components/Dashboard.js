import ListadoTemas from './ListadoTemas';

const Dashboard = ({ mostrarListado, cerrarSesion }) => {
  return (
    <div>
      <h2>Bienvenido al sistema</h2>
      <p>Has iniciado sesión correctamente.</p>
      <button onClick={mostrarListado}>Listado de Temas</button>
      <button 
        onClick={cerrarSesion} 
        style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;