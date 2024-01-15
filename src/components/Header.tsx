import React from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import CategorySelector from "./CategorySelector";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const routes = [
    { title: "À propos" },
    { title: "Articles" },
    { title: "Magazine" },
    { title: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 drop-shadow-sm text-primary h-14 shadow">
        <img
          className="h-full"
          src={
            "https://i0.wp.com/premierepluie.com/wp-content/uploads/2019/09/cropped-logo-png-carr%C3%A9.png"
          }
          alt="Logo"
        />
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="fixed w-full h-full bg-primary px-5 z-10">
          <ul className="mt-6 text-black flex flex-col justify-center">
            {routes.map((route) => (
              <li key={route.title} className="mt-12 text-center">
                <a>{route.title}</a>
              </li>
            ))}
          </ul>
          <h2 className="font-bold mt-10">NOS ARTICLES</h2>
          <div>
            <CategorySelector />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
