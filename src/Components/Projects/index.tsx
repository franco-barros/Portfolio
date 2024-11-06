const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-xl">Market Multiverse</h3>
          <p className="text-gray-600">
            Una plataforma de ecommerce moderna con múltiples categorías y un
            diseño responsivo.
          </p>
          <div className="mt-4">
            <a
              href="https://franco-barros.github.io/Market-multiverse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver Proyecto
            </a>
          </div>
          <div className="mt-4">
            <span className="font-medium">Tecnologías:</span>
            <ul className="flex flex-wrap space-x-2 mt-1 text-sm">
              <li className="text-blue-500">React</li>
              <li className="text-blue-500">Tailwind CSS</li>
              <li className="text-blue-500">JavaScript</li>
            </ul>
          </div>
        </div>
        {/* Aquí puedes agregar más proyectos */}
      </div>
    </section>
  );
};

export default Projects;
