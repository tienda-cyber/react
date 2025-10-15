import React, { useState } from 'react';
import './App.css'; 

// Importación de componentes y datos
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import ListadoTemas from './components/ListadoTemas';
import DetalleTema from './components/DetalleTema';
import datosTemas from './data'; // Renombrado para evitar conflicto

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
            // Muestra error si las credenciales son incorrectas
            alert('Credenciales incorrectas. Usa Usuario: admin y Contraseña: 1234'); 
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
                    <div className="dashboard-container">
                        <h2>Bienvenido al sistema</h2>
                        <p>Has iniciado sesión correctamente.</p>
                        <div className="dashboard-buttons">
                            <button 
                                className="btn-primary" 
                                onClick={() => setVistaActual(VISTAS.LISTADO)}
                            >
                                Listado de Temas
                            </button>
                            <button 
                                className="btn-danger ml-4" 
                                onClick={handleLogout}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                );

            case VISTAS.LISTADO:
                return (
                    <>
                        <div className="dashboard-buttons">
                            <button 
                                className="btn-back" 
                                onClick={handleVolverDashboard}
                            >
                                Volver al Dashboard
                            </button>
                        </div>
                        <ListadoTemas 
                            datos={datosTemas} // Pasa el array de temas al componente
                            onSeleccionarTema={handleSeleccionarTema} 
                        />
                    </>
                );

            case VISTAS.DETALLE:
                // El componente de detalle ahora recibe la función para volver
                return <DetalleTema tema={temaSeleccionado} volver={handleVolver} />;

            default:
                // En caso de que el estado se corrompa, volvemos al dashboard
                return <Login onLogin={handleLogin} />;
        }
    };

    return (
        <div id="app-wrapper">
            <Header />
            <main className="flex-grow container mx-auto">
                {renderContenidoPrincipal()}
            </main>
            <Footer />
        </div>
    );
}

export default App;