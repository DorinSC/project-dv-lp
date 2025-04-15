import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/provider/themeProvider";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import NavBar from "@/components/navigation/navBar";
import Promotions from "@/pages/Promotions";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NavBar />
      <div className="pt-20 max-w-[1280px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} /> {/*not working */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
