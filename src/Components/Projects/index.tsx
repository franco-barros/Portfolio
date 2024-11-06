const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Aquí puedes agregar tus proyectos */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">Proyecto 1</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
