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
} from "@/components/ui/drawer";
import toothLogo from "@/assets/logo/toothlogo.svg";
import { useTranslation } from "react-i18next";

const navItems = [
  {
    title: "promotions",
    href: "/promotions",
  },
  {
    title: "services",
    href: "/services",
  },
  {
    title: "blog",
    href: "/blog",
  },
  {
    title: "contactus",
    href: "/contact-us",
  },
];

const NavBar = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-row py-2 px-4 border border-b-[1px] border-border/50 justify-between bg-background/50 backdrop-blur-md">
      <div className="flex space-x-2">
        <Link
          to="/"
          className="flex flex-row justify-baseline items-center text-3xl  font-bold font-ranga outlined"
        >
          <span>Dental</span>
          <img
            src={toothLogo}
            alt="Tooth Logo"
            className="w-6 h-6 mx-1 inline-block "
          />
          <span>Vlad</span>
        </Link>
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
                      key={item.title}
                      variant="ghost"
                      size="lg"
                      className="justify-start text-lg font-semibold"
                    >
                      <Link to={item.href}>{t(`navitems.${item.title}`)}</Link>
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
              <Button variant="ghost" key={item.title} className="text-md ">
                <Link to={item.href}>{t(`navitems.${item.title}`)}</Link>
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
