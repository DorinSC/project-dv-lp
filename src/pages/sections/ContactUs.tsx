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
        <span className="absolute -bottom-10 -left-10 size-80 rounded-full bg-blue-400/50  dark:bg-blue-800/50 blur"></span>
        <div
          className={cn(
            "relative flex gap-8 p-6 backdrop-blur-2xl ",
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
              <div className="flex items-center gap-2 text-base font-normal sm:text-xl ">
                <MapPin className="size-4" />
                <p>{t(`contactus.location.address`)}</p>
              </div>
            </div>

            <Separator />

            <div className="flex-1 my-auto">
              <p className="mb-2 text-blue-600">
                {t(`contactus.workhours.title`)}
              </p>
              <div className="flex items-center gap-2 text-base font-normal sm:text-xl ">
                <CalendarCheck className="size-4 text-green-500" />
                <p>
                  {t(`weekDays.monday`)} - {t(`weekDays.friday`)} : 08:00 -
                  18:00
                </p>
              </div>
              <div className="flex items-center gap-2 text-base font-normal sm:text-xl ">
                <CalendarX className="size-4 text-red-500" />
                <p>
                  {t(`weekDays.saturday`)} - {t(`weekDays.sunday`)} :{" "}
                  {t(`officeStatus.closed`)}
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex-1 my-auto">
              <p className="mb-2 text-blue-600">
                {t(`contactus.contacts.title`)}
              </p>
              <div className="flex items-center gap-2 text-base font-normal sm:text-xl">
                <Phone className="size-4" />
                <p> +373 0797 33 221</p>
              </div>

              <div className="flex items-center gap-2 text-base font-normal sm:text-xl">
                <Mail className="size-4" /> <p>srl.dentalvlad@gmail.com</p>
              </div>
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
