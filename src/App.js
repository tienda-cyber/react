import React, { useState } from 'react';
import './App.css'; 

// Importación de componentes y datos
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import ListadoTemas from './components/ListadoTemas';
import DetalleTema from './components/DetalleTema';
import datosTemas from './data'; // Renombrado para evitar conflicto
import Dashboard from './components/Dashboard';

// Definición de las posibles vistas (estados de la interfaz)
const VISTAS = {
    LOGIN: 'login',
    DASHBOARD: 'dashboard',
    LISTADO: 'listado',
    DETALLE: 'detalle',
};

function App() {
    // --- Estados Principales ---
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [vistaActual, setVistaActual] = useState(VISTAS.LOGIN);
    const [temaSeleccionado, setTemaSeleccionado] = useState(null);

    // --- Manejadores de Eventos ---

    // Definición de credenciales fijas para la demo
    const CREDENCIALES_CORRECTAS = {
        usuario: 'admin',
        pass: '1234'
    };

    // 1. Maneja el inicio de sesión
    const handleLogin = (user, pass) => {
        // Lógica de autenticación: verifica si el usuario y la contraseña coinciden con los valores fijos.
        if (user === CREDENCIALES_CORRECTAS.usuario && pass === CREDENCIALES_CORRECTAS.pass) {
            setIsAuthenticated(true);
            setVistaActual(VISTAS.DASHBOARD); // Mueve a la vista del Dashboard
        } else {
            console.error('Credenciales incorrectas. Usa Usuario: admin y Contraseña: 1234');
        }
    };

    // 2. Maneja el cierre de sesión
    const handleLogout = () => {
        setIsAuthenticated(false);
        setVistaActual(VISTAS.LOGIN);
        setTemaSeleccionado(null);
    };

    // 3. Maneja la selección de un tema en el listado
    const handleSeleccionarTema = (tema) => {
        setTemaSeleccionado(tema);
        setVistaActual(VISTAS.DETALLE); // Mueve a la vista de detalle
    };

    // 4. Maneja el retorno al listado
    const handleVolver = () => {
        setTemaSeleccionado(null);
        setVistaActual(VISTAS.LISTADO); // Mueve de vuelta al listado
    };

    // 5. Maneja el retorno al dashboard (desde cualquier lugar)
    const handleVolverDashboard = () => {
        setTemaSeleccionado(null);
        setVistaActual(VISTAS.DASHBOARD);
    };

    // --- Renderizado de Vistas ---

    const renderContenidoPrincipal = () => {
        if (!isAuthenticated) {
            return <Login onLogin={handleLogin} />;
        }

        // Si está autenticado, determina qué mostrar según la vista actual
        switch (vistaActual) {
            case VISTAS.DASHBOARD:
                return (
                    <Dashboard 
                        mostrarListado={() => setVistaActual(VISTAS.LISTADO)} 
                        cerrarSesion={handleLogout} 
                    />
                );

            case VISTAS.LISTADO:
                return (
                    <>
                        {/* Botón para volver al dashboard */}
                        <div className="dashboard-buttons">
                            <button 
                                className="btn-back" 
                                onClick={handleVolverDashboard}
                            >
                                Volver al Dashboard
                            </button>
                        </div>
                        {/* Componente que muestra el listado y maneja la búsqueda */}
                        <ListadoTemas 
                            mostrarDetalle={handleSeleccionarTema}
                            cerrarSesion={handleLogout} 
                        />
                    </>
                );

            case VISTAS.DETALLE:
                // Muestra el detalle del tema seleccionado
                return <DetalleTema tema={temaSeleccionado} volver={handleVolver} />;

            default:
                // Si la vista es desconocida, vuelve al login por seguridad
                return <Login onLogin={handleLogin} />;
        }
    };

    return (
        <div id="app-wrapper">
            {/* Oculta Header y Footer en la vista de Login */}
            { vistaActual !== VISTAS.LOGIN && <Header /> }
            
            <main className="main-content"> 
                {renderContenidoPrincipal()}
            </main>
            
            { vistaActual !== VISTAS.LOGIN && <Footer /> }
        </div>
    );
}

export default App;
