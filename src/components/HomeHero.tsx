import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="relative w-full  overflow-hidden  min-h-[calc(100vh-80px)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/images/HomePage/HH Hero Section.mp4" type="video/mp4" />
      </video>

      <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center ">
        <div className="">
          <div className="text-center">
            <h1 className="uppercase lg:w-[429px] w-[250px] m-auto  text-white">
              Designed for the Way You Live.
            </h1>
            <p className="mt-4 text-pretty text-white sm:text-xl/8">
              Welcome to a house that feels you before you speak.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Button btnContent="Discover Smart Living" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
