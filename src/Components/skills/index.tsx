import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Mis Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* React */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">React</h3>
        </div>

        {/* CSS */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">CSS</h3>
        </div>

        {/* HTML */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">HTML5</h3>
        </div>

        {/* Node.js */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Node.js</h3>
        </div>

        {/* Sass */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Sass</h3>
        </div>

        {/* Git */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Git</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
