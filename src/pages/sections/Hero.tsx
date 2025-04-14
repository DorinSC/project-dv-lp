import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import SmilingImg from "@/assets/smiling-w.png";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/isMobile";
import WorkHourIndicator from "@/components/settings/workHourIndicator";

const Hero = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="relative flex flex-row h-[400px] mx-5 bg-background overflow-hidden">
        <div className="flex-1 flex flex-col justify-between items-start gap-4  z-10">
          <div className="flex flex-row gap-2 text-sm">
            <p className="flex flex-row items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" />
              {t(`hero.address`)}
            </p>
            <Separator orientation="vertical" />
            <WorkHourIndicator />
          </div>

          <div className="flex-1 flex flex-col justify-center items-start gap-2">
            <p className="font-light text-3xl antialiased ">
              {t(`hero.title`)}
            </p>

            <p className="font-bold tracking-wide text-4xl text-blue-600 uppercase antialiased ">
              {t(`hero.titlebold`)}
            </p>
            <Separator />
            <p className="font-light text-md text-muted-foreground">
              {t(`hero.description`)}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col justify-center items-start text-md font-thin text-muted-foreground">
              <p>Peste</p>
              <div className="flex flex-row gap-1">
                +
                <p className="font-bold text-lg text-blue-600 text-center">
                  10
                </p>{" "}
                ani
              </div>
              <p>experienta</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col justify-center items-start text-md font-thin text-muted-foreground">
              <p>Mai mult de</p>
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
                +
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
                %
              </div>
              <p>calitate.</p>
            </div>
          </div>
        </div>
        {/* 
        <img
          src={SmilingImg}
          alt="smiling woman"
          className="absolute object-cover h-[600px] bottom-0 left-0 blur-md"
        /> */}
      </div>
    );
  } else {
    return (
      <Card className=" mx-20 p-10 h-[500px] bg-background overflow-hidden">
        <CardContent className="flex flex-row h-full">
          <div className="flex-1 flex flex-col justify-between items-start gap-4 left-10">
            <div className="flex flex-row gap-2">
              <p className="flex flex-row items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" />
                {t(`hero.address`)}
              </p>
              <Separator orientation="vertical" />
              <WorkHourIndicator />
            </div>

            <div className="flex-1 flex flex-col justify-center items-start gap-2">
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

            <div className="flex flex-row gap-4">
              <div className="flex flex-col justify-center items-start text-lg font-thin text-muted-foreground">
                <p>Peste</p>
                <div className="flex flex-row gap-2">
                  <p className="font-bold text-xl text-blue-600 text-center">
                    10
                  </p>{" "}
                  ani
                </div>
                <p>experienta</p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col justify-center items-start text-lg font-thin text-muted-foreground">
                <p>Mai mult de</p>
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
                  +
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
                  %
                </div>
                <p>calitate.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <img
              src={SmilingImg}
              alt="smiling woman"
              className="absolute object-cover h-[550px] -bottom-20 -right-20 "
            />
          </div>
        </CardContent>
      </Card>
    );
  }
};

export default Hero;
