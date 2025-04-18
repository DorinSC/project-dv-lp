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
import CallButton from "@/components/settings/callButton";
import { handleCall } from "@/lib/handleCall";
import { navItems, NavItem, SubItem } from "@/data/navItems";

const NavBar = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px] px-40 flex flex-row py-2 border border-b-[1px] border-border/50 justify-between bg-background ",
        isMobile && "px-4"
      )}
    >
      <div className="flex space-x-2">
        <Link
          to="/"
          className={cn(
            "flex flex-row justify-baseline items-center text-4xl  font-bold font-ranga outlined",
            isMobile && "text-3xl"
          )}
        >
          <span>Dental</span>
          <img
            src={toothLogo}
            alt="Tooth Logo"
            className={cn("w-8 h-8 mx-1 inline-block", isMobile && "w-6 h-6")}
          />
          <span>Vlad</span>
        </Link>
      </div>

      {isMobile ? (
        <div className="flex flex-row items-center gap-2">
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
                  {navItems.map((item: NavItem) => (
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
              {navItems.map((item: NavItem) => (
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
                                <Link to="#">
                                  <NavigationMenuLink className=" block   p-4 h-full rounded-lg bg-muted hover:bg-muted/70">
                                    <div className="text-lg font-medium text-blue-600">
                                      {item.subitems[0].title}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      {item.subitems[0].description}
                                    </p>
                                  </NavigationMenuLink>
                                </Link>
                              )}
                            </div>

                            <div className="flex flex-col gap-2">
                              {item.subitems
                                .slice(1)
                                .map((subitem: SubItem) => (
                                  <Link to="#" key={subitem.title}>
                                    <NavigationMenuLink className="block p-2 rounded-lg hover:bg-muted">
                                      <div className="text-normal font-medium  text-blue-600">
                                        {subitem.title}
                                      </div>
                                      <p className="text-sm text-muted-foreground">
                                        {subitem.description}
                                      </p>
                                    </NavigationMenuLink>
                                  </Link>
                                ))}
                            </div>
                          </div>
                        )}

                        {item.layout === "columns-2" && (
                          <div className="grid grid-cols-2 gap-4 p-4 w-[500px]">
                            {item.subitems.map((subitem: SubItem) => (
                              <Link to="#" key={subitem.title}>
                                <NavigationMenuLink className="block p-2 rounded-lg hover:bg-muted">
                                  <div className="font-medium">
                                    {subitem.title}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {subitem.description}
                                  </p>
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Default layout if no special layout provided */}
                        {!item.layout && (
                          <div className="p-4 w-[200px]">
                            {item.subitems.map((subitem: SubItem) => (
                              <Link to="#" key={subitem.title}>
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

          <div className="flex flex-row items-center gap-4">
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
