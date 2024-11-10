"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="w-full h-[70px] flex justify-between items-center p-4 bg-white shadow-md">
      <Image
        src={"/logo.png"}
        alt="Logo"
        width={50}
        height={50}
        className="h-auto w-auto"
      />
      <nav>
        <ul
          className={`flex items-center space-x-4 sm:flex-row sm:space-x-6 sm:ml-auto sm:mr-auto ${
            nav
              ? "fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-[#f8f8f8] z-10 flex-col justify-center transition-all duration-1000"
              : "hidden sm:flex"
          }`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#luxury">Luxury Selection</Link>
          </li>
          <li>
            <Link href="/#find">Find your drive</Link>
          </li>
          <li>
            <AiOutlineSearch size={25} className="mt-[6px]" />
          </li>
          <li>
            <AiOutlineUser size={25} className="mt-[6px]" />
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setNav(!nav)}
        className="lg:hidden absolute right-4 cursor-pointer z-10"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Header;
