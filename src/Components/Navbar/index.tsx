const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white border-b-4 border-red-600">
      <a href="/" className="text-lg font-bold">
        Mi Portafolio
      </a>
      <ul className="flex space-x-4">
        <li>
          <a href="../aboutme">Sobre mí</a>
        </li>
        <li>
          <a href="../projects">Proyectos</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
