import React from "react";
import { Link } from "react-router";
import LanguageToggle from "@/components/settings/languageToogle";
import ThemeToggle from "@/components/settings/themeToggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/isMobile";
import { Menu } from "lucide-react";
import { Drawer, DrawerBody, DrawerContent, DrawerTrigger } from "../ui/drawer";
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
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-row m-4 py-2 px-4 rounded-xl border border-px border-border/50 justify-between bg-background/50 backdrop-blur-xs">
      <div className="flex items-center">
        <Link to="/">logo</Link>
      </div>

      {isMobile ? (
        <div className="flex flex-row gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <Drawer>
            <DrawerTrigger>
              <Button size="icon" variant="outline">
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
                      className="justify-start text-lg"
                    >
                      <Link to={item.href}>{t(`navbar.${item.label}`)}</Link>
                    </Button>
                  ))}
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      ) : (
        <>
          <div className="flex flex-row gap-4">
            {navItems.map((item) => (
              <Button variant="ghost" key={item.label}>
                <Link to={item.href}>{t(`navbar.${item.label}`)}</Link>
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
