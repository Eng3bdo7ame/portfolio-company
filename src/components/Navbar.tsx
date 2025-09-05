"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About us",
      href: "/AboutUsPage",
    },

    {
      name: "Services",
      href: "/ServicesPage",
    },

    {
      name: "Projects",
      href: "/projects",
    },

    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="w-full relative">
      <div
        className="w-full py-[24px] bg-primary-1 backdrop-blur-sm bg-opacity-70"
        style={{ backdropFilter: "blur(10px)" }}>
        <div className="container mx-auto ">
          <div className="w-full flex  flex-col lg:flex-row">
            <div className=" flex justify-between  lg:flex-row">
              <Link href="/" className="flex items-center">
                <Image
                  width={158}
                  height={39}
                  src="/images/mainImage/Logo.png"
                  alt="Logo"
                />
              </Link>
              <Image
                onClick={toggleMenu}
                width={24}
                height={24}
                src="/images/mainImage/NavMenu.svg"
                alt="Menu"
                className="h-6"
              />
            </div>

            <div className="hidden w-full lg:flex " id="navbar-default-example">
              <ul className="flex items-center  flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row 2xl:gap-12 lg:gap-8">
                {links.map((link) => (
                  <li className="" key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center  justify-between text-primary-2 text-sm lg:text-[18px] font-medium hover:text-indigo-700 transition-all duration-500 ">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="dropdownNavbar"
          className="absolute mt-2 right-2 z-50  font-normal bg-primary-1 divide-y divide-gray-100 rounded-lg shadow-sm w-44  dark:divide-gray-600">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownLargeButton">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-4 py-2 text-primary-2 hover:bg-gray-500  ">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
