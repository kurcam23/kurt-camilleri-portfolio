import React from "react";
import config from "../index.json";
// import Image from "next/image";

const About = () => {
  const about = config.about;
  return (
    <div
      id="About"
      className="px-6 md:px-24 pb-24 content-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800"
    >
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">
        {about.title}
      </h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <div className="flex justify-center p-4">
            <img
              className="h-82 w-82 rounded-full object-cover"
              src="/assets/hero.jpeg" // Replace with the path to your photo
              alt="A photo of you"
            />
          </div>
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <span>{about.primary}</span>
          </div>
          <div className="mt-6">
            <span>{about.secondary}</span>
          </div>
          <div className="mt-6">
            <span>{about.tertiary}</span>
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
            <a
              href="/assets/KurtCamilleri.pdf"
              download="KurtCamilleri.pdf"
              className="about__resume text-white text-l"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
