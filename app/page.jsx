import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
// import Loader from "@/components/Loader";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      {/* <Loader /> */}
        <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <Cta />
    </>
  );
}
