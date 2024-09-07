import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Logoticker from "@/components/Logoticker";
import Navbar from "@/components/Navbar";
import Productshowcase from "@/components/Productshowcase";

export default function Home() {
  return (
      <>
       <Banner/>
       <Navbar/>
       <Hero/>
       <Logoticker/>
       <Features/>
       <Productshowcase/>
       <FAQs/>
      </>
  );
}
