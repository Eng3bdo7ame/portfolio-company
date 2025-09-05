import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Card from "@/components/Card";
import AboutSection from "@/components/About";
import Image from "next/image";
import OurPartners from "@/components/OurPartners";

import React from "react";

export default function page() {
  return (
    <section>
      <HeroSection src="/images/ServicesPage/Hero.png" />
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
          <div className=" mt-20">
            <p className="text-primary-2 text-center  font-semibold py-8 ">
              At Home Hunters, we believe in a future where homes and businesses
              operate with intelligence, precision, and ease, Our mission is to
              transform your environment into a responsive, secure, and
              seamlessly connected space. From smart home automation systems to
              audio visual solutions, surveillance systems, and network
              infrastructure, we deliver the technologies that power tomorrow’s
              living.
            </p>
            <div className="lg:px-10 px-4 grid grid-cols-1  lg:grid-cols-2 gap-10">
              <Card
                imge="/images/HomePage/cardImage.svg"
                icon="/images/HomePage/icon.svg"
                title="Electronic Low Voltage (ELV)"
                description="We provide professional CCTV installation services offering high-quality cameras."
                Discover="Read More"
              />
            </div>
            <div className="flex py-10 justify-center">
              <Button btnContent="Explore All Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
