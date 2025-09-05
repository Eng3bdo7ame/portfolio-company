import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/About";
import Card from "@/components/Card";
import OurPartners from "@/components/OurPartners";
import Button from "@/components/Button";
import Image from "next/image";

export default function page() {
  return (
    <section>
      <HeroSection src="/images/AboutPage/AboutHero.svg" />
      <div className="container mx-auto">
        <div className="my-20">
          <AboutSection
            image="/images/AboutPage/About.png"
            title="Who We Are"
            description={
              <>
                <div>
                  Founded in Abu Dhabi in 2017, Home Hunters is a pioneer in
                  smart home automation, CCTV security systems, and ELV (Extra
                  Low Voltage) solutions. We specialize in building intelligent,
                  secure, and fully connected environments for homes, commercial
                  buildings, and government entities across the UAE.
                </div>

                <div>
                  Backed by a multidisciplinary team of engineers, system
                  designers, network experts, and software consultants, we
                  implement smart home systems that monitor, analyze, and
                  respond, creating seamless control and security from anywhere
                  in the world.
                </div>
                <div>
                  We’ve secured over 1,000 facilities, combining the best smart
                  locks, intercom systems, home control, and surveillance
                  technologies to make everyday living smarter and more
                  intuitive.
                </div>
              </>
            }
            button="Explore Our Solutions "
          />
        </div>
        <div>
          <div className="my-10 lg:px-10 px-4 grid grid-cols-1  lg:grid-cols-2 gap-10">
            <div>
              <h1 className="text-primary-2 text-center  font-semibold py-4">
                Our Mission
              </h1>
              <Card
                imge="/images/HomePage/cardImage.svg"
                icon="/images/HomePage/icon.svg"
                description="To design and implement smart security systems that understand the unique needs of each client and adapt to their environment using the latest global technologies, giving individuals and organizations true peace of mind, wherever they are."
              />
            </div>
            <div>
              <h1 className="text-primary-2 text-center  font-semibold py-4">
                Our Vision
              </h1>
              <Card
                imge="/images/HomePage/cardImage.svg"
                icon="/images/HomePage/icon.svg"
                description="To design and implement smart security systems that understand the unique needs of each client and adapt to their environment using the latest global technologies, giving individuals and organizations true peace of mind, wherever they are."
              />
            </div>
          </div>
        </div>

        <div className="flex py-10 justify-center">
          <Button btnContent="Explore All Services" />
        </div>
        <div className="mt-5 mb-20">
          <h1 className="text-primary-2 text-center font-semibold ">
            Our Values{" "}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
            <div className="flex flex-col space-y-28">
              <Card
                icon="/images/HomePage/icon.svg"
                title="Innovation in every solution we build"
              />
              <Card
                icon="/images/HomePage/icon.svg"
                title="Tailored security for every client"
              />
            </div>
            <div className=" flex justify-center items-center">
              <Image
                width={588}
                height={504}
                src="/images/AboutPage/AboutCamera.svg"
                alt="Card Image"
                className="w-full h-auto"
              />
            </div>
            <div className=" flex flex-col space-y-28">
              <Card
                icon="/images/HomePage/icon.svg"
                title="Innovation in every solution we build"
              />
              <Card
                icon="/images/HomePage/icon.svg"
                title="Tailored security for every client"
              />
            </div>
          </div>
        </div>

        <div>
          <AboutSection
            reverse={true}
            image="/images/AboutPage/About.png"
            title="? Why Choose Us"
            description="At Home Hunters, we blend cutting-edge technology with personalized service to deliver smart security solutions that truly understand and adapt to your unique needs. Our commitment to innovation, reliability, and customer satisfaction sets us apart in the industry."
            button="Discover Our Solutions"
          />
        </div>
        <OurPartners
          title="Our Partners"
          description="Our partners are leaders in the security and automation industries, providing us with the tools and technologies to deliver the best solutions to our clients."
        />
      </div>
    </section>
  );
}
