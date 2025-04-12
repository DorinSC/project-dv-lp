import { Moon, Sun, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/provider/themeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

    setTheme(nextTheme);
  };

  const getIcon = () => {
    if (theme === "light") return <Sun className="h-4 w-4" />;
    if (theme === "dark") return <Moon className="h-4 w-4" />;
    return <SunMoon className="h-4 w-4" />;
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
