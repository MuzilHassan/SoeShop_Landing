import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  console.log(navLinks);
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container w-full">
        <a href="#">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" font-monts errat leading-normal text-lg text text-slate-gray hover:cursor-pointer hover:text-cyan-400 "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
