import HeroSection from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className="container mx-auto">
        <About />
        <p className="text-lg">
          I am a web developer with a passion for creating beautiful and
          functional websites.
        </p>
      </div>
    </main>
  );
}
