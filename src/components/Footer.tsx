import Image from "next/image";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  UserRound,
  Youtube,
} from "lucide-react";

export default function Footer() {
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

  const socialLinks = [
    {
      icon: <Facebook />,
      href: "https://www.facebook.com/pagedone.io/",
    },
    {
      icon: <Twitter />,
      href: "https://twitter.com/pagedoneio",
    },
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/pagedone.io/",
    },
    {
      icon: <Linkedin />,
      href: "https://www.linkedin.com/company/pagedone-io/",
    },
    {
      /*************  ✨ Windsurf Command 🌟  *************/
      icon: <Youtube />,
      href: "https://www.youtube.com/channel/UC1234567890",
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin />,
      description:
        "University Building, Floor 7, Office 702, Al Ma’mourah St., Al Nahyan, E25, Abu Dhabi.",
    },
    {
      icon: <UserRound />,
      description: "02 558 0907",
    },
    {
      icon: <Phone />,
      description: "+971 55 996 0438",
    },
    {
      icon: <Mail />,
      description: "info@homehunter.ae",
    },
  ];

  return (
    <>
      <div
        className="w-full h-[280px]"
        style={{
          backgroundImage: "url(/images/mainImage/eyeCo.png)",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}>
        {" "}
      </div>

      <footer
        className="bg-primary-1"
        style={{
          backgroundImage: "url(/images/footerBackground.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "soft-light",
        }}>
        <div className="container space-y-8  py-16 lg:space-y-16 ">
          <div className="grid  grid-cols-12 gap-8">
            <div className="xl:col-span-4 col-span-12 space-y-4">
              <div className="">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="mx-auto lg:mx-0"
                />
              </div>

              <form className="">
                <div>
                  <div className="flex rounded-lg">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      className="py-3  px-3 pe-11 block w-full bg-gray-50 rounded-l-lg sm:text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <button className="px-2 bg-primary-2  inline-flex items-center min-w-fit rounded-e-md border border-e-0 border-primary-2  text-sm text-white">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="xl:col-span-4 col-span-4 text-left xl:ml-16">
              <ul className="mt-6 space-y-4 text-sm">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[18px] text-gray-700 transition hover:opacity-75">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-span-4 col-span-8 sm:text-left xl:ml-10">
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map((info, index) => (
                  <li
                    key={index}
                    className="text-[14px] flex items-start gap-2 text-gray-700 transition hover:opacity-75">
                    <span>{info.icon}</span>
                    {info.description}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ul className="flex  mt-2 space-x-4">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-700 transition hover:opacity-75">
                        <span>{link.icon}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            ={" "}
          </div>
        </div>

        <div className="bg-primary-2 text-center py-4 ">
          <p className="font-normal text-[15px]  text-white">
            &copy; All Rights Reserved 2025 | Created by{" "}
            <span className="font-black">KEMIT</span>BRAND
          </p>
        </div>
      </footer>
    </>
  );
}
