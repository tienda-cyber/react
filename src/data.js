const datosTemas = [ // <-- Cambiado de 'data' a 'datosTemas'
    {
        id: 1,
        nombre: "React",
        descripcion: "Biblioteca JavaScript para construir interfaces de usuario.",
        contenido_extendido: "React permite crear componentes reutilizables y gestionar el estado de manera eficiente. Su principal ventaja es el uso del Virtual DOM, que optimiza las actualizaciones de la interfaz. Es la base de muchas aplicaciones modernas.",
        codigo_ejemplo: `import React from 'react';

function Saludo(props) {
    return (
        <div className="card">
            <h1>¡Hola, {props.nombre}!</h1>
            <p>Este es un componente funcional.</p>
        </div>
    );
}

export default Saludo;
`,
        icono: 'react', // Icono de Font Awesome
        imagen: "https://placehold.co/600x400/003d6d/FFFFFF?text=React+JS",
    },
    {
        id: 2,
        nombre: "JavaScript",
        descripcion: "Lenguaje de programación esencial para la web.",
        contenido_extendido: "JavaScript es un lenguaje de programación interpretado que, junto con HTML y CSS, es una de las tecnologías centrales de la World Wide Web. Permite implementar funciones complejas en páginas web y hacerlas interactivas.",
        codigo_ejemplo: `// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Salida: 120
`,
        icono: 'js', // Icono de Font Awesome
        imagen: "https://placehold.co/600x400/f0db4f/000000?text=JavaScript",
    },
    {
        id: 3,
        nombre: "CSS Avanzado",
        descripcion: "Técnicas modernas de diseño y maquetación.",
        contenido_extendido: "CSS (Cascading Style Sheets) avanzado incluye el uso de Flexbox, Grid Layout y variables CSS (custom properties). Estas herramientas son cruciales para crear diseños responsivos y fáciles de mantener.",
        codigo_ejemplo: `/* Uso de Flexbox para centrar contenido */
.contenedor {
    display: flex;
    justify-content: center; /* Centrado horizontal */
    align-items: center; /* Centrado vertical */
    height: 100vh;
}

/* Uso de Variables CSS */
:root {
    --color-principal: #3498db;
}

.boton {
    background-color: var(--color-principal);
}
`,
        icono: 'css3', // Icono de Font Awesome
        imagen: "https://placehold.co/600x400/2965f1/FFFFFF?text=CSS+3",
    },
    {
        id: 4,
        nombre: "Node.js",
        descripcion: "Entorno de ejecución de JavaScript del lado del servidor.",
        contenido_extendido: "Node.js permite a los desarrolladores utilizar JavaScript para escribir scripts del lado del servidor y construir aplicaciones de red escalables y de alto rendimiento. Es ideal para APIs RESTful y microservicios.",
        codigo_ejemplo: `const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola Mundo desde Node.js!');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});
`,
        icono: 'node-js', // Icono de Font Awesome
        imagen: "https://placehold.co/600x400/3c873a/FFFFFF?text=Node+JS",
    },
    {
        id: 5,
        nombre: "Python",
        descripcion: "Lenguaje de programación versátil para desarrollo backend y datos.",
        contenido_extendido: "Python es conocido por su sintaxis clara y legible, lo que lo hace popular en áreas como el desarrollo web (frameworks como Django y Flask), ciencia de datos, machine learning y automatización de scripts.",
        codigo_ejemplo: `# Ejemplo de función en Python
def saludar(nombre):
    """Función que saluda a la persona dada por su nombre."""
    return f"Hola, {nombre}!"

mensaje = saludar("Mundo")
print(mensaje)
`,
        icono: 'python', // Icono de Font Awesome
        imagen: "https://placehold.co/600x400/3776ab/FFD43B?text=Python",
    }
];

export default datosTemas;