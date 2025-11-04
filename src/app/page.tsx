import Hero from "@/components/hero/hero";

import AboutSection from "./about/page";
import MarqueeText from "@/components/text/text";
import ProjectsCarousel from "@/components/text/cards";
import Contact from "./contact/page";
import FAQ from "./faq/page";
import Footer from "@/components/footer/footer";
import BlurNavbar from "@/components/navbar/nav1";





export  default function HomePage() {
  return (
    <div>
      <BlurNavbar/>
      <div>
        <Hero/>
        <div>
          <MarqueeText/>
        </div>
        <div>
          <AboutSection/>
        </div>
              
        <div>
       <ProjectsCarousel/>
        </div>
        <div>
          <Contact/>
          </div>
          <div>
          <FAQ/>
          </div>
          <Footer/>
      </div>
      </div>
  );
}