import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/provider/themeProvider";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import NavBar from "@/components/navigation/navBar";
import Promotions from "@/pages/Promotions";
import Blog from "@/pages/Blog";
import ContactUs from "@/pages/ContactUs";
import NavFooter from "@/components/navigation/navFooter";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NavBar />

      <div className="mt-20 mx-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <NavFooter />
    </ThemeProvider>
  );
}

export default App;
