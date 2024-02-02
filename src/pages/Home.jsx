import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-stone-100">
      <Nav />
      <div className="px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-justify">
          <h2 className="text-3xl text-center font-extrabold mb-5 tracking-tighter text-gray-900 sm:text-4xl">
            <span className="text-kaki">Basculer</span> vers ce qui nous lie
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mx-10">
            <p className="mt-6 sm:text-lg leading-8 text-gray-600">
              <span className="float-left text-kaki font-extrabold text-7xl leading-none mr-3">
                T
              </span>
              oggleGood est une entreprise qui offre une méthode novatrice
              d'accompagnement pour les chefs d'entreprise. Leur méthode
              consiste à analyser les intentions du chef d'entreprise et à
              l'accompagner dans un processus de décision utile en 21 jours.
              "Libérons ensemble votre pouvoir de décision !" est plus qu'un
              slogan ; c'est une promesse faite par Laurent Rouxel, le fondateur
              de ToggleGood. La méthode d'accompagnement de ToggleGood est
              personnalisée et tient compte de l'environnement, de la
              personnalité et des besoins du gérant. Elle offre une réflexion
              profonde pour identifier les leviers de progrès, permettant ainsi
              une prise de décision sereine et éclairée.
            </p>

            <p className="mt-6 sm:text-lg leading-8 text-gray-600">
              Au lieu de proposer des solutions toutes faites, la méthode
              encourage à trouver ses propres réponses, favorisant une avancée
              autonome dans la bonne direction. La grande force de cette méthode
              réside dans sa capacité à briser l'isolement souvent ressenti par
              les chefs d'entreprise. Elle facilite une prise de recul
              nécessaire pour questionner efficacement les enjeux actuels et
              futurs. Grâce à ce processus, des pistes d'amélioration émergent
              naturellement, des engagements clairs sont pris, et des décisions
              bénéfiques pour l'entreprise sont adoptées. Les témoignages des
              dirigeants ayant expérimenté l'accompagnement de ToggleGood
              soulignent son impact positif notable.
            </p>
          </div>
          <p className="mt-10 sm:text-lg leading-8 text-gray-600 max-w-5xl text-justify mx-10">
            En résumé, ToggleGood offre aux chefs d'entreprise une méthode
            d'accompagnement unique et personnalisée, conçue pour transformer
            les processus décisionnels. Elle permet de surmonter l'isolement,
            d'adopter une perspective nouvelle et de formuler des questions
            pertinentes, conduisant à des solutions autonomes et à des décisions
            propices au développement de leur entreprise.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
