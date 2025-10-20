import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js"
import LatestPost from "@/components/Latest.js";
import Footer from "@/components/Footer.js";
export default function Home() {
  return (
    <>
    
         <Navbar/>
         <Hero/>
         <LatestPost/>
         <Footer/>
    </>
  );
}
