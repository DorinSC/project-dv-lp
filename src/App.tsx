import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/provider/themeProvider";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import NavBar from "@/components/navigation/navBar";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NavBar />
      <div className="pt-20 max-w-[1280px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
