import HeroSection from "../components/HomeHero";
import About from "../components/About";
import Card from "../components/Card";
import Button from "@/components/Button";
import OurPartners from "../components/OurPartners";
import { getHomeData } from "@/lib/api";

export default async function Home() {
  const { services, partners, clients } = await getHomeData();

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

        <div className="bg-[#F6F6F6] mt-20  rounded-xl">
          <h1 className="text-primary-2 text-center  font-semibold py-8 ">
            Comprehensive security and surveillance solutions
          </h1>
          <div className="lg:px-10 px-4 grid grid-cols-1  lg:grid-cols-2 gap-10">
            {services.map((service) => (
              <Card
                key={service.id}
                image={service.image}
                icon={service.icon}
                title={service.title}
                summary={service.summary}
                discover="Discover More"
              />
            ))}
          </div>
          <div className="flex py-10 justify-center">
            <Button btnContent="Explore All Services" />
          </div>
        </div>

        <div className="my-15 text-center">
          <h1 className="text-4xl text-primary-2 text-center font-bold">
            Our Partners
          </h1>
          <p className=" text-primary-2 w-[55%] mx-auto">
            Our systems are built using the world’s most trusted security and
            automation partners & Technology You Can Trust On.
          </p>

          <OurPartners items={partners} />
        </div>

        <div>
          <About
            counter={true}
            background="/images/AboutBackground.jpg"
            image="/images/HomePage/HomeAbout2.svg"
            title="Delivering security with excellence"
            description="We specialize in providing top-quality security and CCTV solutions to safeguard your home and business. Our mission is to ensure peace of mind with reliable."
          />
        </div>

        <div className="mb-10 text-center">
          <h1 className="text-4xl text-primary-2 text-center font-bold">
            Clients
          </h1>
          <p className=" text-primary-2 w-[55%] mx-auto ">
            We’ve protected, connected, and transformed spaces of every kind,
            Our success is measured by trust, And we’ve earned plenty of it
          </p>

          <OurPartners items={clients} />
        </div>
      </div>
    </main>
  );
}
