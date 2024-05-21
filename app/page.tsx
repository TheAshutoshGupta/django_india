import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurGoals from "./components/OurGoals";
export default function Home() {
  return (<div className="relative">
  <Navbar/>
  <Hero/>
  <OurGoals/>
  </div>
    
  );
}
