import React from "react";
import config from "../index.json";
import { FaAngleUp } from "react-icons/fa"; // import the up caret

const Footer = () => {
  const footer = config.footer;
  const getYear = () => new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer px-6 py-6 flex flex-col items-center bg-neutral-800">
      {/* Back to top button */}
      <div className="mb-2">
        <button
          onClick={scrollToTop}
          className="text-neutral-400 hover:text-white transition-colors duration-300"
        >
          <FaAngleUp className="w-8 h-8 hover:cursor-pointer" />
        </button>
      </div>

      <div className="text-neutral-400 text-center">
        {getYear()} Kurt Camilleri
      </div>
    </footer>
  );
};

export default Footer;
