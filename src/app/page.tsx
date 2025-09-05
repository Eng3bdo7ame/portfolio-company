import HeroSection from "../components/HomeHero";
import About from "../components/About";
import Card from "../components/Card";
import Button from "@/components/Button";
import OurPartners from "../components/OurPartners";

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <div className="container mx-auto">
        <About
          image="/images/HomePage/HomeAbout.png"
          title="Because safety isn’t a choice."
          description="Born in Abu Dhabi in 2017, Home Hunters creates living spaces that don’t just react, they anticipate, From smart home automation to ELV systems and AI-powered security, our tech doesn’t just follow trends, it sets them, With a team of engineers, consultants, and visionary designers, we blend intelligence and innovation to bring you homes that respond, adapt, and protect, instantly."
          button="Learn More About Us"
        />

        <div className="bg-gray-200 mt-20  rounded-xl">
          <h1 className="text-primary-2 text-center  font-semibold py-8 ">
            Comprehensive security and surveillance solutions
          </h1>
          <div className="lg:px-10 px-4 grid grid-cols-1  lg:grid-cols-2 gap-10">
            <Card
              imge="/images/HomePage/cardImage.svg"
              icon="/images/HomePage/icon.svg"
              title="Electronic Low Voltage (ELV)"
              description="We provide professional CCTV installation services offering high-quality cameras."
              Discover="Discover More"
            />
          </div>
          <div className="flex py-10 justify-center">
            <Button btnContent="Explore All Services" />
          </div>
        </div>
        <OurPartners
          title="Our Partners"
          description="Our partners are leaders in the security and automation industries, providing us with the tools and technologies to deliver the best solutions to our clients."
        />

        <div>
          <About
            counter={true}
            background="/images/AboutBackground.jpg"
            image="/images/HomePage/HomeAbout2.svg"
            title="Delivering security with excellence"
            description="We specialize in providing top-quality security and CCTV solutions to safeguard your home and business. Our mission is to ensure peace of mind with reliable."
          />
        </div>

        <OurPartners
          title="Our Partners"
          description="Our partners are leaders in the security and automation industries, providing us with the tools and technologies to deliver the best solutions to our clients."
        />
      </div>
    </main>
  );
}
