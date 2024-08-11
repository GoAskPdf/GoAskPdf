"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const menu = [
  { id: 1, name: "Home" },
  { id: 2, name: "How it works?" },
  { id: 3, name: "Feature" },
  { id: 4, name: "Pricing" },
  { id: 5, name: "FAQs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked menu");
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 relative bg-black text-white">
      <a href={"/"} className="flex items-center gap-2">
        <Image src={logo} alt="Logo" height={49} width={50} />
        <span className="text-yellow-300 font-bold text-xl">GoAskPDF</span>
      </a>
      <div className="hidden md:flex gap-6">
        {menu.map((item) => (
          <Link
            href={`#${item.name.replace(/\s+/g, "-").toLowerCase()}`}
            key={item.id}
            className={
              item.name === "Home"
                ? "text-green-400 font-bold cursor-pointer"
                : "cursor-pointer"
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex">
        <Link href={'/sign-up'} className="px-4 py-2 bg-yellow-400 text-black rounded-md font-bold">
          Sign Up
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={handleMenuToggle}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? <MdClose size={24} /> : <CiMenuBurger size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center z-10">
          {menu.map((item) => (
            <Link
              href={`#${item.name.replace(/\s+/g, "-").toLowerCase()}`}
              key={item.id}
              className={
                item.name === "Home"
                  ? "text-green-400 font-bold cursor-pointer py-2"
                  : "cursor-pointer py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="py-2">
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md font-bold">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
