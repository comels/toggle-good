const Footer = () => {
  // Composant Footer : affiche les informations de contact, les horaires et les liens vers les réseaux sociaux
  return (
    <footer className="bg-white pt-10 pb-5">
      <div className="grid sm:grid-cols-3 gap-10 items-center">
        {/* Section du logo et adresse */}
        <div className="flex flex-col mx-auto">
          <div className="text-center">
            <a
              href="https://www.google.fr/maps/place/Le+Maharaja+2001/@48.8862032,2.3216354,19.53z/data=!4m15!1m8!3m7!1s0x47e66fb28f550d8f:0xa109917431093c8b!2s48+Rue+la+Condamine,+75017+Paris!3b1!8m2!3d48.8862492!4d2.3220552!16s%2Fg%2F11c11mnk5y!3m5!1s0x47e66fb2858c4229:0xdacc90bb73a204f!8m2!3d48.8862369!4d2.3220858!16s%2Fg%2F12hm6xf6y?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm font-light text-gray-800">140 rue Legendre</p>
              <p className="text-sm font-light text-gray-800">Paris 75017</p>
            </a>
          </div>
        </div>
        {/* Horaires et contact */}
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-lg">Laurent Rouxel</h1>
          <a href="tel:+33142949672">
            <h2 className="text-gray-800">01 42 63 83 29</h2>
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
