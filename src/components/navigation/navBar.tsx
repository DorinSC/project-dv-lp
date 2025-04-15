import { Link } from "react-router";
import LanguageToggle from "@/components/settings/languageToogle";
import ThemeToggle from "@/components/settings/themeToggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/isMobile";
import { Menu, Phone } from "lucide-react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import { useTranslation } from "react-i18next";

const navItems = [
  {
    label: "promotions",
    href: "/promotions",
  },
  {
    label: "services",
    href: "/services",
  },
  {
    label: "blog",
    href: "/blog",
  },
  {
    label: "contactus",
    href: "/contact-us",
  },
];

const NavBar = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-row py-2 px-4 border border-b-[1px] border-border/50 justify-between bg-background/50 backdrop-blur-md">
      <div className="flex items-center">
        <Link to="/">logo</Link>
      </div>

      {isMobile ? (
        <div className="flex flex-row gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <Drawer>
            <DrawerTrigger>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerBody>
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      size="lg"
                      className="justify-start text-lg font-semibold"
                    >
                      <Link to={item.href}>{t(`navitems.${item.label}`)}</Link>
                    </Button>
                  ))}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg font-semibold text-green-600 border border-green-200 bg-green-100/50 hover:bg-green-100/90 dark:border-green-700 dark:bg-green-800/50 dark:hover:bg-green-800/90"
                >
                  <Phone />
                  {t("navitems.appointment")}
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ) : (
        <>
          <div className="flex flex-row gap-4">
            {navItems.map((item) => (
              <Button variant="ghost" key={item.label} className="text-md ">
                <Link to={item.href}>{t(`navitems.${item.label}`)}</Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-row gap-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;
