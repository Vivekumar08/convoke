import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { navbarLinks } from "../Content";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky lg:-mb-24 z-10   flex flex-wrap items-center justify-between px-2 py-3 bg-gray-600/70 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full align-middle items-center relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              rel="noopener noreferrer"
              className="text-xl font-bold hidden leading-relaxed lg:inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="http://cic.du.ac.in/"
              target="blank"
            >
              Cluster Innovation Centre
            </a>
            <a
              rel="noopener noreferrer"
              className="text-xl font-bold leading-relaxed inline-block lg:hidden  py-2 whitespace-nowrap uppercase text-white"
              href="http://cic.du.ac.in/"
              target="blank"
            >
              CIC
            </a>
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
                  <NavLink
                    rel="noopener noreferrer"
                    className={({ isActive }) =>
                      isActive
                        ? "px-3 py-2 flex items-center text-sm uppercase decoration-yellow-300 underline decoration-2 font-marcellus leading-snug text-white hover:opacity-75"
                        : "px-3 py-2 flex items-center text-sm uppercase hover:decoration-yellow-300 hover:underline hover:decoration-2 font-marcellus leading-snug text-white hover:opacity-75"
                    }
                    to={items.url}
                  >
                    <span className="ml-2">{items.item}</span>
                  </NavLink>
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
