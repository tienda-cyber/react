const Header = ({ contenido }) => (
  <header>
    <h1>{contenido.titulo}</h1>
    <p>{contenido.subtitulo}</p>
  </header>
);

export default Header;