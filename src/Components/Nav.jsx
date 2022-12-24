import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { navbarLinks } from "../Content";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky -mb-16 z-10   flex flex-wrap items-center justify-between px-2 py-3 bg-gray-600/70 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full align-middle items-center relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Convoke
            </Link>
            <IconContext.Provider value={{ color: "white" }}>
              {!navbarOpen ? (
                <div className="lg:hidden cursor-pointer outline-none focus:outline-none">
                  <FiMenu
                    size={25}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  />
                </div>
              ) : (
                <div className="lg:hidden cursor-pointer outline-none focus:outline-none">
                  <FiX size={25} onClick={() => setNavbarOpen(!navbarOpen)} />
                </div>
              )}
            </IconContext.Provider>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {navbarLinks.map((items, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    rel="noopener noreferrer"
                    className="px-3 py-2 flex items-center text-sm uppercase hover:decoration-yellow-300 hover:underline hover:decoration-2 font-satisfy leading-snug text-white hover:opacity-75"
                    to={items.url}
                  >
                    <span className="ml-2">{items.item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
