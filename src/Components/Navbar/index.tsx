"use client";

const Navbar = (id: string) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white border-b-4 border-red-600">
      <button
        onClick={() => scrollToSection("inicio")}
        className="text-lg font-bold cursor-pointer"
      >
        Mi Portafolio
      </button>
      <ul className="flex space-x-4">
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            Sobre mí
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("footer")}
            className="cursor-pointer"
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
