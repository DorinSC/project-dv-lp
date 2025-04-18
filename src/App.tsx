import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/provider/themeProvider";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import NavBar from "@/components/navigation/navBar";
import NotFound from "@/pages/NotFound";
import FixedPopover from "@/components/settings/fixedPopover";
import { handleCall } from "@/lib/handleCall";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import NavFooter from "@/components/navigation/navFooter";

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
        <FixedPopover>
          <div className="relative flex size-12">
            <span className="absolute inline-flex size-full rounded-2xl bg-green-200/50 dark:bg-green-700/50 animate-ping"></span>
            <Button
              className="relative inline-flex size-full rounded-2xl border border-green-500/50 bg-green-100 dark:bg-green-900"
              size="icon"
              onClick={() => {
                handleCall();
              }}
            >
              <Phone className="size-1/2 text-green-500" />
            </Button>
          </div>
        </FixedPopover>
      </div>
      <NavFooter />
    </ThemeProvider>
  );
}

export default App;
