import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ListadoTemas from './components/ListadoTemas';
import DetalleTema from './components/DetalleTema'; // NUEVO IMPORTE
import { headerContent, footerContent } from './contenido';
import './App.css';


function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [showListado, setShowListado] = useState(false);
  
  // NUEVO ESTADO: Guarda el tema seleccionado para mostrar los detalles
  const [temaSeleccionado, setTemaSeleccionado] = useState(null); 

  const cerrarSesion = () => {
    setAutenticado(false);
    setShowListado(false);
    setTemaSeleccionado(null); // Limpiar por seguridad
  };
  
  const volverAlDashboard = () => {
    setShowListado(false);
    setTemaSeleccionado(null); // Asegurar que no haya tema seleccionado al volver al Dashboard
  };

  const irAListado = () => {
    setShowListado(true);
    setTemaSeleccionado(null); // Asegurar que se vea el listado y no el detalle
  };
  
  // NUEVA FUNCIÓN: Al hacer clic en un tema
  const seleccionarTema = (tema) => {
    setTemaSeleccionado(tema);
    // showListado se mantiene en true, pero la renderización cambiará a DetalleTema
  };

  // NUEVA FUNCIÓN: Al hacer clic en "Volver al Listado"
  const volverAListado = () => {
    setTemaSeleccionado(null);
  };

  const renderContenido = () => {
    if (!autenticado) {
      return <Login onLogin={setAutenticado} />;
    }

    if (!showListado) {
      return (
        <Dashboard 
          mostrarListado={irAListado} 
          cerrarSesion={cerrarSesion}
        />
      );
    }
    
    // ----------------------------------------------------
    // LÓGICA DE DETALLE/LISTADO
    if (temaSeleccionado) {
        // Muestra el detalle del tema
        return (
            <DetalleTema 
                tema={temaSeleccionado} 
                volverAListado={volverAListado} // Función para resetear el estado
            />
        );
    } else {
        // Muestra el listado de temas
        return (
            <ListadoTemas 
                volver={volverAlDashboard}
                onSeleccionarTema={seleccionarTema} // Función para seleccionar tema
            />
        );
    }
    // ----------------------------------------------------
  };

  return (
    <div className="App">
      <Header contenido={headerContent} />
      <main className="main-content">
        {renderContenido()}
      </main>
      <Footer contenido={footerContent} />
    </div>
  );
}

export default App;
