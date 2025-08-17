import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="relative w-full  overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/images/HH Hero Section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative ">
        <div className="mx-auto max-w-2xl  lg:py-40">
          <div className="text-center">
            <h1 className="uppercase w-[429px] m-auto lg:text-[40px] line-clamp-5 leading-[56px] font-bold tracking-[2px] text-balance text-white sm:text-7xl">
              Designed for the Way You Live.
            </h1>
            <p className="mt-8 text-lg text-[18px] leading-[26px] tracking-[1px] text-pretty text-white sm:text-xl/8">
              Welcome to a house that feels you before you speak.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button btnContent="Discover Smart Living" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
