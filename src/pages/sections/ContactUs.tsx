import GMap from "@/components/maps/gMap";
import SectionContainer from "@/components/sectionContainer";
import SectionLabel from "@/components/sectionLabel";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import { CalendarCheck, CalendarX, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  return (
    <SectionContainer className="flex flex-col">
      <SectionLabel>{t("contactus.title")}</SectionLabel>

      <div className="relative rounded-lg  border border-border/50 bg-background/50 overflow-hidden">
        <span className="absolute -bottom-10 -left-10 size-80 rounded-full bg-blue-400/50  dark:bg-blue-800/50"></span>
        <div
          className={cn(
            "relative flex gap-8 p-6 backdrop-blur-2xl",
            isMobile ? "flex-col " : "flex-row "
          )}
        >
          <div
            className={cn(
              "flex-1/2 flex flex-col font-thin ",
              isMobile ? " gap-4 text-lg" : " gap-8 text-xl"
            )}
          >
            <div className="flex-1 my-auto">
              <p className="mb-2 text-blue-600">
                {t(`contactus.location.title`)}
              </p>
              <p className="flex items-center gap-2 font-medium ">
                <MapPin className="size-4" />
                {t(`contactus.location.address`)}
              </p>
            </div>
            <Separator />
            <div className="flex-1 my-auto">
              <p className="mb-2 text-blue-600">
                {t(`contactus.workhours.title`)}
              </p>
              <p className="flex items-center gap-2 font-medium ">
                <CalendarCheck className="size-4 text-green-600" />
                {t(`weekDays.monday`)} - {t(`weekDays.friday`)} : 08:00 - 18:00
              </p>
              <p className="flex items-center gap-2 font-medium ">
                <CalendarX className="size-4 text-red-600" />
                {t(`weekDays.saturday`)} - {t(`weekDays.sunday`)} :{" "}
                {t(`officeStatus.closed`)}
              </p>
            </div>
            <Separator />
            <div className="flex-1 my-auto">
              <p className="mb-2 text-blue-600">
                {t(`contactus.contacts.title`)}
              </p>
              <p className="flex items-center gap-2 font-medium ">
                <Phone className="size-4" /> +357 071234567
              </p>

              <p className="flex items-center gap-2 font-medium ">
                <Phone className="size-4" /> +357 071234567
              </p>

              <p className="flex items-center gap-2 font-medium ">
                <Mail className="size-4" /> dentalVlad@office.com
              </p>
            </div>
          </div>
          <div className="flex-1/2 rounded-lg overflow-hidden">
            <GMap />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactUs;
