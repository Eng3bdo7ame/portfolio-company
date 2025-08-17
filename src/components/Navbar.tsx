import Image from "next/image";
import React from "react";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About us",
      href: "/about",
    },

    {
      name: "Services",
      href: "/services",
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
    <nav
      className="w-full py-[24px] bg-primary-1 backdrop-blur-sm bg-opacity-70"
      style={{ backdropFilter: "blur(10px)" }}>
      <div className="container mx-auto ">
        <div className="w-full flex  flex-col lg:flex-row">
          <div className=" flex justify-between  lg:flex-row">
            <a href="/home" className="flex items-center">
              <Image
                width={158}
                height={39}
                src="/images/Logo.png"
                alt="Logo"
              />
            </a>
            <button
              data-collapse-toggle="navbar-default-example"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default-example"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <Image
                width={24}
                height={24}
                src="/images/menu-icon.svg"
                alt="Menu"
                className="h-6"
              />
            </button>
          </div>

          <div className="hidden w-full lg:flex " id="navbar-default-example">
            <ul className="flex items-center  flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row 2xl:gap-12 lg:gap-8">
              {links.map((link) => (
                <li className="" key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center  justify-between text-primary-2 text-sm lg:text-[18px] font-medium hover:text-indigo-700 transition-all duration-500 ">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
