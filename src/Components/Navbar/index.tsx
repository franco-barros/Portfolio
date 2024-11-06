const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <a href="/" className="text-lg font-bold">
        Mi Portafolio
      </a>
      <ul className="flex space-x-4">
        <li>
          <a href="../AboutMe">Sobre mí</a>
        </li>
        <li>
          <a href="../Projects">Proyectos</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
