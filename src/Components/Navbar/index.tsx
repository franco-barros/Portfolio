"use client";

const Navbar = (id: string) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg">
      <button
        onClick={() => scrollToSection("inicio")}
        className="text-2xl font-extrabold text-red-500 hover:text-red-400 transition duration-300"
      ></button>
      <ul className="flex space-x-8">
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg font-medium text-white hover:text-gray-400 transition duration-300 items-start"
          >
            Sobre mí
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-lg font-medium text-white hover:text-gray-400 transition duration-300"
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
