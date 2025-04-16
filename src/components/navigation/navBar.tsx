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
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import toothLogo from "@/assets/logo/toothlogo.svg";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import CallButton from "../settings/callButton";
import { handleCall } from "@/lib/handleCall";

const navItems = [
  {
    title: "promotions",
    href: "/promotions",
    layout: "featured", // specify custom layout
    subitems: [
      {
        title: "promotion 1",
        href: "/promotions/1",
        description: "lorem ipsum",
      },
      {
        title: "promotion 2",
        href: "/promotions/2",
        description: "lorem ipsum ipsum lorem",
      },
      {
        title: "promotion 3",
        href: "/promotions/3",
        description: "lorem ipsum lorem ipsum",
      },
    ],
  },
  {
    title: "services",
    href: "/services",
    layout: "columns-2", // another custom layout
    subitems: [
      { title: "service 1", href: "/services/1", description: "lorem ipsum" },
      {
        title: "service 2",
        href: "/services/2",
        description: "lorem ipsum ipsum lorem",
      },
      {
        title: "service 3",
        href: "/services/3",
        description: "lorem ipsum lorem ipsum",
      },
      {
        title: "service 4",
        href: "/services/4",
        description: "lorem ipsum lorem ipsum",
      },
    ],
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-40 flex flex-row py-2 border border-b-[1px] border-border/50 justify-between bg-background ",
        isMobile && "px-4"
      )}
    >
      <div className="flex space-x-2">
        <Link
          to="/"
          className={cn(
            "flex flex-row justify-baseline items-center text-3xl  font-bold font-ranga outlined",
            isMobile && "text-2xl"
          )}
        >
          <span>Dental</span>
          <img
            src={toothLogo}
            alt="Tooth Logo"
            className={cn("w-6 h-6 mx-1 inline-block", isMobile && "w-5 h-5")}
          />
          <span>Vlad</span>
        </Link>
      </div>

      {isMobile ? (
        <div className="flex flex-row gap-2">
          <CallButton />
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
                  onClick={() => isMobile && handleCall()}
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
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.subitems ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                        <Link to={item.href}>
                          {t(`navitems.${item.title}`)}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {item.layout === "featured" && (
                          <div className="grid grid-cols-2 gap-4 p-4 w-[500px]">
                            <div>
                              {/* First item prominently displayed */}
                              {item.subitems[0] && (
                                <Link to={item.subitems[0].href}>
                                  <NavigationMenuLink className="block p-4 h-full rounded-lg bg-muted hover:bg-muted/70">
                                    <div className="font-semibold text-lg">
                                      {t(`navitems.${item.subitems[0].title}`)}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      {t(
                                        `navitems.${item.subitems[0].description}`
                                      )}
                                    </p>
                                  </NavigationMenuLink>
                                </Link>
                              )}
                            </div>
                            <div className="flex flex-col gap-2">
                              {item.subitems.slice(1).map((subitem) => (
                                <Link to={subitem.href} key={subitem.title}>
                                  <NavigationMenuLink className="block p-2 rounded-lg hover:bg-muted">
                                    <div className="font-medium">
                                      {t(`navitems.${subitem.title}`)}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      {t(`navitems.${subitem.description}`)}
                                    </p>
                                  </NavigationMenuLink>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.layout === "columns-2" && (
                          <div className="grid grid-cols-2 gap-4 p-4 w-[500px]">
                            {item.subitems.map((subitem) => (
                              <Link to={subitem.href} key={subitem.title}>
                                <NavigationMenuLink className="block p-2 rounded-lg hover:bg-muted">
                                  <div className="font-medium">
                                    {t(`navitems.${subitem.title}`)}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {t(`navitems.${subitem.description}`)}
                                  </p>
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Default layout if no special layout provided */}
                        {!item.layout && (
                          <div className="p-4 w-[200px]">
                            {item.subitems.map((subitem) => (
                              <Link to={subitem.href} key={subitem.title}>
                                <NavigationMenuLink className="block p-2 rounded-lg hover:bg-muted">
                                  <div className="font-medium">
                                    {t(`navitems.${subitem.title}`)}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {t(`navitems.${subitem.description}`)}
                                  </p>
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </div>
                        )}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link to={item.href}>
                      <NavigationMenuLink className="p-2">
                        {t(`navitems.${item.title}`)}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex flex-row gap-4">
            <CallButton />
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;
