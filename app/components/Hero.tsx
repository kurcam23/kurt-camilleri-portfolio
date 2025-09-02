import React from "react";
import config from "../index.json";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const hero = config.hero;

  const links = [
    {
      href: "https://www.linkedin.com/in/kurt-camilleri-56b413190/",
      label: "LinkedIn",
      Icon: FaLinkedinIn,
      hover: "hover:text-blue-600",
    },
    {
      href: "https://www.facebook.com/kurt.camilleri.965",
      label: "Facebook",
      Icon: FaFacebookF,
      hover: "hover:text-blue-500",
    },
    {
      href: "https://www.instagram.com/kurt99c/",
      label: "Instagram",
      Icon: FaInstagram,
      hover: "hover:text-pink-500",
    },
  ];

  return (
    <section
      className="h-screen bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: "url('/assets/desk.jpg')" }}
    >
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl mt-64 font-bold tracking-wide text-white">
          Hi, my name is
          <span className="ml-3 whitespace-nowrap text-blue-900">
            {hero.name}
          </span>
        </h1>
        <h1 className="text-6xl font-bold tracking-wide mt-4 text-white">
          {hero.subtitle}
        </h1>
        <a href="#About" className="text-2xl font-bold p-0.5 mt-6 w-44">
          <div className={`flex items-center gap-4`}>
            {links.map(({ href, label, Icon, hover }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`text-slate-100 transition-colors ${hover}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={22} aria-hidden="true" />
                </a>
              ) : null
            )}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
