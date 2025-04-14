import { Facebook, Instagram, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import GMap from "@/components/maps/gMap";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/isMobile";

const NavFooter = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-4 m-4 py-8 px-4 rounded-xl border border-px border-border/50  bg-background/50 backdrop-blur-xs">
      <div className="flex flex-row justify-around ">
        {!isMobile && (
          <div className="w-[600px] h-[200px] rounded-xl overflow-hidden bg-background">
            <GMap />
          </div>
        )}

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold mb-2">
            {t("footer.firstcolumntitle")}
          </h1>
          <ul>
            <li className="flex items-center gap-2">
              <Phone className="size-4" /> +357 071234567
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4" /> +357 071234567
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="size-4" /> @Dental Vlad
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="size-4" /> @DentalVlad
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="flex justify-center">
        <p className="text-muted-foreground/60 font-semibold">
          Dental Vlad © 2016 - {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default NavFooter;
