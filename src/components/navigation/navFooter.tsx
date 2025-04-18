import { useTranslation } from "react-i18next";
import { navItems, NavItem } from "@/data/navItems";
import { Button } from "@/components/ui/button";
import FbIcon from "@/assets/icons/facebookIcon.png";
import GIcon from "@/assets/icons/googleIcon.png";
import InstaIcon from "@/assets/icons/instagramIcon.png";

const NavFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col mt-8 p-5 border-t border-border/50 justify-center gap-8">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        {navItems.map((item: NavItem) => (
          <Button variant="ghost"> {t(`navitems.${item.title}`)}</Button>
        ))}
      </div>
      <div className="flex flex-row gap-8 justify-center items-center">
        <p className="text-base sm:text-xl font-medium">{t(`footer.follow`)}</p>
        <div className="flex flex-row gap-4">
          <img className="h-6 w-6" src={FbIcon} />
          <img className="h-6 w-6" src={GIcon} />
          <img className="h-6 w-6" src={InstaIcon} />
        </div>
      </div>
      <div className="text-center text-muted-foreground  text-base">
        Dental Vlad &copy; 2016 - {currentYear}
      </div>
    </footer>
  );
};

export default NavFooter;
