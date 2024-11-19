import React from "react";
import Image from "next/image";
import ReactIcon from "@/assets/icons/react.png";
import CssIcon from "@/assets/icons/css.png";
import HtmlIcon from "@/assets/icons/html.png";
import JavaScriptIcon from "@/assets/icons/javascript.png";
import SassIcon from "@/assets/icons/sass-5.png";
import GitIcon from "@/assets/icons/github-6980894_960_720.webp";
import TypeScriptIcon from "@/assets/icons/typescript.png";
import ViteIcon from "@/assets/icons/vite.png";
import TailwindIcon from "@/assets/icons/tailwind.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Mis skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* React */}
        <div className="skill-card p-6 bg-white text-center rounded-lg shadow-lg flex flex-col items-center justify-center max-h-72">
          <Image
            src={ReactIcon}
            alt="React"
            width={48}
            height={48}
            className="mx-auto mb-2 object-contain"
            style={{ maxWidth: "100%" }}
          />
          <h3 className="text-xl font-semibold">React</h3>
        </div>

        {/* CSS */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <Image
            src={CssIcon}
            alt="CSS"
            width={48}
            height={48}
            className="max-w-full h-auto mb-2"
          />
          <h3 className="text-xl font-semibold">CSS</h3>
        </div>

        {/* HTML */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <Image
            src={HtmlIcon}
            alt="HTML5"
            width={48}
            height={48}
            className="max-w-full h-auto mb-2"
          />
          <h3 className="text-xl font-semibold">HTML5</h3>
        </div>

        {/* JavaScript */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <Image
            src={JavaScriptIcon}
            alt="JavaScript"
            width={64} // Ajusta el tamaño
            height={64}
            className="max-w-full h-auto mb-2"
          />
          <h3 className="text-xl font-semibold">Node.js</h3>
        </div>

        {/* Sass */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <Image
            src={SassIcon}
            alt="Sass"
            width={48}
            height={48}
            className="max-w-full h-auto mb-2"
          />
          <h3 className="text-xl font-semibold">Sass</h3>
        </div>

        {/* TypeScript */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <Image
            src={TypeScriptIcon} // Asegúrate de tener la importación correcta para TypeScriptIcon
            alt="TypeScript"
            width={48}
            height={48}
            className="mx-auto mb-2"
          />
          <h3 className="text-xl font-semibold">TypeScript</h3>
        </div>

        {/* Vite */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <Image
            src={ViteIcon} // Asegúrate de tener la importación correcta para ViteIcon
            alt="Vite"
            width={48}
            height={48}
            className="mx-auto mb-2"
          />
          <h3 className="text-xl font-semibold">Vite</h3>
        </div>

        {/* Tailwind CSS */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <Image
            src={TailwindIcon} // Asegúrate de tener la importación correcta para TailwindIcon
            alt="Tailwind CSS"
            width={48}
            height={48}
            className="mx-auto mb-2"
          />
          <h3 className="text-xl font-semibold">Tailwind CSS</h3>
        </div>

        {/* Git */}
        <div className="skill-card p-4 bg-white text-center rounded-lg shadow-lg">
          <Image
            src={GitIcon}
            alt="Git"
            width={48}
            height={48}
            className="max-w-full h-auto mb-2"
          />
          <h3 className="text-xl font-semibold">Git</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
