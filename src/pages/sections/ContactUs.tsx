import GMap from "@/components/maps/gMap";
import SectionContainer from "@/components/sectionContainer";
import SectionLabel from "@/components/sectionLabel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import { CalendarCheck, CalendarX, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  return (
    <SectionContainer className="flex flex-col ">
      <SectionLabel>Contact Us</SectionLabel>

      <Card>
        <CardContent
          className={cn(
            "flex gap-8 backdrop-blur-2xl h-[800px]",
            isMobile ? "flex-col h-[800px]" : "flex-row h-[400px]"
          )}
        >
          <div
            className={cn(
              "flex-1/2 flex flex-col font-thin text-muted-foreground",
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
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default ContactUs;
