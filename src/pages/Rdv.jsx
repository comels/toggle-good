import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Rdv = () => {
  return (
    <div>
      <Nav />
      <iframe
        src="https://calendly.com/laurent-togglegood"
        width="100%"
        height="630"
      ></iframe>
      <Footer />
    </div>
  );
};

export default Rdv;
