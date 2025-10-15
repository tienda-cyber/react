// Dashboard.js

const Dashboard = ({ mostrarListado, cerrarSesion }) => {
  return (
    <div className="dashboard-container">
      <h2>Bienvenido al sistema</h2>
      <p>Has iniciado sesión correctamente.</p>
      
      {/* Botón para Listado de Temas (compacto) */}
      <button onClick={mostrarListado}>Listado de Temas</button>
      
      {/* Botón para Cerrar Sesión (compacto) */}
      <button 
        onClick={cerrarSesion} 
        style={{ backgroundColor: 'red' }} // Mantienes tu estilo de color
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;