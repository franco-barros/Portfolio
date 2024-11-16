const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 via-red-500 to-red-600 text-white text-center p-8 overflow-hidden"
    >
      {/* Fondo de ruido */}
      <svg
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-10 z-0"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="6"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Imagen o ilustración decorativa en la esquina inferior derecha */}
      <div className="absolute right-10 bottom-10 opacity-25 transform rotate-12">
        <svg
          width="200"
          height="200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>
      </div>

      {/* Contenido principal de la card */}
      <div className="relative max-w-3xl mx-auto z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hola, mi nombre es Franco Barros
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Soy desarrollador web. Bienvenido a mi portafolio.
        </p>

        {/* Botón de llamada a la acción */}
        <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-md hover:bg-black hover:text-white transition duration-300">
          Ver mis proyectos
        </button>
      </div>
    </section>
  );
};

export default Hero;
