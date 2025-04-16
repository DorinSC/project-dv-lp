import CTA from "@/pages/sections/CTA";
import Hero from "@/pages/sections/Hero";
import Services from "@/pages/sections/Services";
import ContactUs from "@/pages/sections/ContactUs";
import Testimonials from "@/pages/sections/Testimonials";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <CTA />

      <Services />

      <Testimonials />

      <ContactUs />
    </div>
  );
};

export default Home;
