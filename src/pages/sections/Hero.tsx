import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import SmilingImg from "@/assets/smiling-w.png";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/isMobile";
import WorkHourIndicator from "@/components/settings/officeStatus";

const Hero = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <div className="flex flex-col h-[350px] mx-5 bg-background overflow-hidden">
          <div className="flex-1 flex flex-col justify-between items-start gap-4  z-10">
            <div className="flex flex-row gap-2 text-sm">
              <a
                href="https://maps.app.goo.gl/DpASuLvw7wRc2Yw67"
                className="flex flex-row items-center gap-2 text-muted-foreground cursor-pointer"
              >
                <MapPin className="size-4" />
                {t(`hero.address`)}
              </a>
              <Separator orientation="vertical" />
              <WorkHourIndicator />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-2">
              <p className="font-light text-3xl antialiased ">
                {t(`hero.title`)}
              </p>

              <p className="font-bold tracking-wide text-4xl text-blue-600 uppercase antialiased ">
                {t(`hero.titlebold`)}
              </p>
              <Separator />
              <p className="font-light text-sm text-muted-foreground">
                {t(`hero.description`)}
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-32">
          <img
            src={SmilingImg}
            alt="smiling woman"
            className="absolute object-cover bottom-1 h-[300px] left-1/2 -translate-x-1/2"
          />

          <div className="flex flex-row gap-2 z-10 w-full h-20 p-2 justify-center bg-background/80 backdrop-blur-2xl ">
            <div className="flex flex-col justify-center items-start text-md font-thin text-muted-foreground">
              <p>Mai mult de</p>

              <div className="flex flex-row gap-1">
                <p className="font-bold text-lg text-blue-600 text-center">
                  10
                </p>{" "}
                <p>ani</p>
              </div>

              <p>experienta</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col justify-center items-start text-md font-thin text-muted-foreground">
              <p>Oferim peste</p>
              <p className="font-bold text-lg text-blue-600 text-center">30</p>
              <p>servicii</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col justify-center items-start text-md font-thin text-muted-foreground">
              <p>Mandri cu</p>
              <div className="flex flex-row gap-1">
                <p className="font-bold text-lg text-blue-600 text-center">
                  5000
                </p>{" "}
                <p>+</p>
              </div>
              <p>clienti tratati</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col justify-center items-start text-md font-thin text-muted-foreground">
              <p>Garantam</p>
              <div className="flex flex-row gap-1">
                <p className="font-bold text-lg text-blue-600 text-center">
                  100
                </p>{" "}
                <p>%</p>
              </div>
              <p>calitate</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Card className="mx-20 p-10 h-[500px] backdrop-blur-2xl overflow-hidden relative">
        <CardContent className="flex flex-row h-full ">
          <div className="flex-1 flex flex-col justify-between items-start gap-4  z-10">
            <div className="flex flex-row gap-2">
              <a
                href="https://maps.app.goo.gl/DpASuLvw7wRc2Yw67"
                className="flex flex-row items-center gap-2 text-muted-foreground cursor-pointer"
              >
                <MapPin className="size-4" />
                {t(`hero.address`)}
              </a>
              <Separator orientation="vertical" />
              <WorkHourIndicator />
            </div>

            <div className="flex-1 flex flex-col justify-center items-start max-w-1/2 gap-2">
              <p className="font-light text-5xl antialiased ">
                {t(`hero.title`)}
              </p>

              <p className="font-bold tracking-wide text-6xl text-blue-600 uppercase antialiased ">
                {t(`hero.titlebold`)}
              </p>
              <Separator />
              <p className="font-light text-md text-muted-foreground">
                {t(`hero.description`)}
              </p>
            </div>

            <div className="flex flex-row gap-4 p-2 backdrop-blur-2xl rounded-xl">
              <div className="flex flex-col justify-center items-start text-lg font-thin ">
                <p>Mai mult de</p>
                <div className="flex flex-row gap-2">
                  <p className="font-bold text-xl text-blue-600 text-center">
                    10
                  </p>{" "}
                  <p>ani</p>
                </div>
                <p>experienta</p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col justify-center items-start text-lg font-thin text-muted-foreground">
                <p>Oferim peste</p>
                <p className="font-bold text-xl text-blue-600 text-center">
                  30
                </p>
                <p>servicii</p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col justify-center items-start text-lg font-thin text-muted-foreground">
                <p>Mandri cu</p>
                <div className="flex flex-row gap-2">
                  <p className="font-bold text-xl text-blue-600 text-center">
                    5000
                  </p>{" "}
                  <p>+</p>
                </div>
                <p>clienti tratati</p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col justify-center items-start text-lg font-thin text-muted-foreground">
                <p>Garantam</p>
                <div className="flex flex-row gap-2">
                  <p className="font-bold text-xl text-blue-600 text-center">
                    100
                  </p>{" "}
                  <p>%</p>
                </div>
                <p>calitate.</p>
              </div>
            </div>
          </div>

          <img
            src={SmilingImg}
            alt="smiling woman"
            className="absolute object-cover h-[550px] z-0 -bottom-20 -right-20"
          />
        </CardContent>
      </Card>
    );
  }
};

export default Hero;
