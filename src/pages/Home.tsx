import CTA from "@/pages/sections/CTA";
import Hero from "@/pages/sections/Hero";
import Services from "@/pages/sections/Services";
import ContactUs from "@/pages/sections/ContactUs";
import Testimonials from "@/pages/sections/Testimonials";
import Gallery from "@/pages/sections/Gallery";
import Promotions from "@/pages/sections/Promotions";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <CTA />

      <Promotions />

      <Services />

      <Testimonials />

      <Gallery />

      <ContactUs />
    </div>
  );
};

export default Home;
