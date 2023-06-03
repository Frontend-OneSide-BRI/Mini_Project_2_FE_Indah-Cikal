import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "./Header.css";

export default function Header() {
  const Links = [{ name: "Artworks", link: "/artwork" }];

  const contacts = [
    { icon: <BsGithub />, link: "https://github.com/indahcikalao" },
    { icon: <BsInstagram />, link: "https://www.instagram.com/icao17/" },
    { icon: <BsLinkedin />, link: "https://www.linkedin.com/in/indahcikalao/" },
    { icon: <BsWhatsapp />, link: "https://wa.link/1sq5x1" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-10 left-0 px-10 z-[100]">
      <div className="sm:flex items-center justify-between py-4 sm:px-10 box">
        <h1 className="font-bold text-2xl cursor-pointer flex items-center text-dark-font hover:text-light-font duration-500 px-7 sm:px-0">
          <Link to="/">Cikal's Galery</Link>
        </h1>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-[4rem] top-5 cursor-pointer sm:hidden "
        >
          {open ? <MdClose /> : <BiMenu />}
        </div>

        <ul
          className={`sm:flex sm:items-center sm:p-0 p-4 absolute sm:static sm:z-auto z-[99]  w-10/12 sm:w-auto bg-white sm:bg-transparent rounded-[13px] sm:rounded-none ${
            open ? "top-20 " : "hidden"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="sm:mx-2 text-xl sm:my-0 my-3">
              <Link
                to={link.link}
                className="text-dark-font hover:text-light-font duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex sm:hidden py-5">
            <p className="text-xl mr-2">Find me on :</p>
            {contacts.map((item, i) => (
              <Link
                to={item.link}
                className="px-2 text-2xl text-dark-font hover:text-light-font duration-500"
                key={i}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </ul>
        <div className="hidden sm:flex">
          {contacts.map((item, i) => (
            <Link
              to={item.link}
              className="px-2 text-2xl text-dark-font hover:text-light-font duration-500"
              key={i}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
