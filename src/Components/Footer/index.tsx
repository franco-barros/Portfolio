import Image from "next/image";
import LinkedInIcon from "@/assets/icons/LinkedIn_icon.svg.png";
import GmailIcon from "@/assets/icons/Gmail_icon_(2020).svg.webp";
import GitHubIcon from "@/assets/icons/github.png";

const Footer = () => {
  return (
    <footer className="py-6 px-8 text-white text-center bg-gradient-to-r from-orange-500 via-red-500 to-red-600">
      <p>
        &copy; {new Date().getFullYear()} Franco Barros. Todos los derechos
        reservados.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/francobarros08/"
          target="_blank"
          aria-label="linkedin"
          className="transform transition duration-300 hover:scale-110 hover:opacity-80"
        >
          <Image
            src={LinkedInIcon}
            alt="LinkedIn logo"
            width={24}
            height={24}
          />
        </a>
        <a
          href="mailto:francobarrosdaniel@gmail.com"
          target="_blank"
          aria-label="gmail"
          className="transform transition duration-300 hover:scale-110 hover:opacity-80"
        >
          <Image src={GmailIcon} alt="Gmail logo" width={24} height={24} />
        </a>
        <a
          href="https://github.com/franco-barros"
          target="_blank"
          aria-label="github"
          className="transform transition duration-300 hover:scale-110 hover:opacity-80"
        >
          <Image src={GitHubIcon} alt="GitHub logo" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
