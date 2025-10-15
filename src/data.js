const temas = [
    {
        id: '1',
        titulo: 'React',
        descripcion: 'Biblioteca JavaScript para construir interfaces de usuario.',
        imagen_url: 'https://placehold.co/600x250/00bcd4/ffffff?text=React+Componentes',
        contenido_extendido: 'React permite crear componentes reutilizables y gestionar el estado de manera eficiente. Su principal ventaja es el uso del Virtual DOM, que optimiza las actualizaciones de la interfaz. Es la base de muchas aplicaciones modernas.',
        codigo_ejemplo: `import React from 'react';

function Saludo(props) {
  return (
    <div className="card">
      <h1>¡Hola, {props.nombre}!</h1>
      <p>Este es un componente funcional.</p>
    </div>
  );
}

export default Saludo;`
    },
    {
        id: '2',
        titulo: 'JavaScript',
        descripcion: 'Lenguaje de programación esencial para la web.',
        imagen_url: 'https://placehold.co/600x250/f7df1e/000000?text=JS+Async',
        contenido_extendido: 'JavaScript es un lenguaje interpretado que soporta programación orientada a objetos, imperativa y funcional. Es la base de todo desarrollo web moderno (front-end y back-end), siendo clave para la interactividad.',
        codigo_ejemplo: `const obtenerDatos = async (url) => {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};`
    },
    {
        id: '3',
        titulo: 'CSS Avanzado',
        descripcion: 'Técnicas modernas de diseño y maquetación.',
        imagen_url: 'https://placehold.co/600x250/ff6b6b/ffffff?text=CSS+Grid',
        contenido_extendido: 'Aprende a usar Flexbox y Grid para maquetaciones responsivas, variables CSS para temas dinámicos, y transiciones para animaciones suaves, llevando el diseño web al siguiente nivel.',
        codigo_ejemplo: `:root {
  --color-primario: #007bff;
}

.contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  gap: 20px;
  background-color: var(--color-primario);
}`
    },
];

export default temas;
