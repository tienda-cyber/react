import React from 'react';
import '../App.css'; // Aseguramos que los estilos están accesibles

const Footer = () => {
    // Usamos el año actual para el copyright
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="main-footer">
            <p>&copy; {currentYear} Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
