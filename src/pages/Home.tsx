import CTA from "@/pages/sections/CTA";
import Hero from "@/pages/sections/Hero";
import Team from "./sections/Team";
import Services from "./sections/Services";
import ContactUs from "./sections/ContactUs";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <CTA />

      <Services />

      <Team />

      <ContactUs />
    </div>
  );
};

export default Home;
