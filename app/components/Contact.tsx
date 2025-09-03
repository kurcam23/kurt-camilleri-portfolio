import React from "react";
import config from "../index.json";

const Contact = () => {
  const contact = config.contact;
  return (
    <div
      id={contact.title}
      className="px-8 sm:px-12 md:px-32 pb-24 flex justify-center align-center flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800"
    >
      <h2 className="mt-12 uppercase font-bold text-center text-white text-bold text-4xl">
        {contact.title}
      </h2>
      <div className="contact-wrapper load-hidden flex flex-col items-center justify-center pt-12">
        <a
          rel="noreferrer"
          target="_blank"
          className="border-2 border-white text-white font-semibold py-3 px-8 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300 text-lg"
          href="mailto:kurcam0061@gmail.com"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
