import Image from "next/image";
import React from "react";

export default function HeroSection({ src }) {
  return (
    <section
      className="w-full h-[610px]"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      {/* <Image
        src="/images/AboutLine.png"
        height={50}
        width={50}
        alt="Hero Image"
        className=""
      /> */}
    </section>
  );
}
