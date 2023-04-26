import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 top-0 fixed z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-[#915EFF] text-xl sm:text-base font-bold flex cursor-pointer">
            zeph1697 &nbsp;
            <span className="sm:block hidden text-slate-800">
              Front-end Developer
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-secondary"
              } hover:text-black text-base font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] flex justify-center items-center object-contain cursor-pointer text-3xl text-slate-900"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <MdClose /> : <HiMenuAlt2 />}
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-slate-300"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
