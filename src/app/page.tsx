import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Logoticker from "@/components/Logoticker";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <>
       <Banner/>
       <Navbar/>
       <Hero/>
       <Logoticker/>
       <Features/>
      </>
  );
}
