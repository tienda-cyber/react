import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ListadoTemas from './components/ListadoTemas';
import { headerContent, footerContent } from './contenido';
import './App.css';


function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [showListado, setShowListado] = useState(false);

  const cerrarSesion = () => {
    setAutenticado(false);
    setShowListado(false);
  };
  
  // Función para volver al Dashboard desde ListadoTemas
  const volverAlDashboard = () => {
    setShowListado(false);
  };

  const irAListado = () => {
    setShowListado(true);
  };

  return (
    <div className="App">
      <Header contenido={headerContent} />

      <main className="main-content">
        {!autenticado ? (
          <Login onLogin={setAutenticado} />
        ) : showListado ? (
          // Pasa la función para volver al Dashboard
          <ListadoTemas volver={volverAlDashboard} />
        ) : (
          <Dashboard 
            mostrarListado={irAListado} 
            cerrarSesion={cerrarSesion}
          />
        )}
      </main>

      <Footer contenido={footerContent} />
    </div>
  );
}

export default App;