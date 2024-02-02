import { NavLink } from "react-router-dom";

const Footer = () => {
  // Composant Footer : affiche les informations de contact, les horaires et les liens vers les réseaux sociaux
  return (
    <footer className="bg-white pt-10 pb-5">
      <div className="grid sm:grid-cols-3 gap-10 items-center">
        {/* Section du logo et adresse */}
        <div className="flex flex-col mx-auto">
          <div className="text-center">
            <NavLink
              to="/rdv"
              className="leading-6 text-sm hover:text-base font-bold bg-kaki px-4 py-3 rounded-lg text-white"
            >
              PRENDRE RDV
            </NavLink>
          </div>
        </div>
        {/* Horaires et contact */}
        <div className="flex flex-col items-center">
          <h1 className="font-bold mb-3 text-lg">Laurent <span className="text-kaki">Rouxel</span></h1>
          <a href="tel:+33679863983">
            <h2 className="text-gray-800">06 79 86 39 83</h2>
          </a>
        </div>
        {/* Liens vers les réseaux sociaux et partenaires */}
        <div className="mx-auto">
          <a
            href="https://www.linkedin.com/in/comels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 text-2xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <p className="text-center mt-16 font-light text-gray-800 text-xs">
        Copyright © 2024 -{" "}
        <a
          href="https://www.linkedin.com/in/comels/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-normal"
        >
          Côme Le Sauter
        </a>{" "}
        - développeur web
      </p>
    </footer>
  );
};

export default Footer;
