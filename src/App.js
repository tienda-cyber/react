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
  const volverAlDashboard = () => {
    setShowListado(false);
  };

  return (
    <div className="App">
      <Header contenido={headerContent} />

      {!autenticado ? (
        <Login onLogin={setAutenticado} />
      ) : showListado ? (
        <ListadoTemas volver={volverAlDashboard} />
      ) : (
        <Dashboard 
          mostrarListado={() => setShowListado(true)} 
          cerrarSesion={cerrarSesion}
        />
      )}

      <Footer contenido={footerContent} />
    </div>
  );
}

export default App;