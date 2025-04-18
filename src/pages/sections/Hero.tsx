import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import SmilingImg from "@/assets/smiling-w.png";
import { useTranslation } from "react-i18next";
import WorkHourIndicator from "@/components/settings/officeStatus";
import SectionContainer from "@/components/sectionContainer";
import { useIsMobile } from "@/hooks/isMobile";

const indications = [
  { main: "10 ani", secondary: "de experienta in domeniu" },
  { main: "50000 +", secondary: "Clienti multumiti" },
  { main: "100%", secondary: "calitate si garantie" },
  { main: "80 +", secondary: "Servicii" },
];

const Hero = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const displayedIndications = isMobile ? indications.slice(0, 3) : indications;

  return (
    <SectionContainer className="px-0 my-0 gap-0">
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between w-full h-auto lg:h-[500px] bg-background  overflow-hidden px-5 pt-5 lg:p-10 rounded-lg backdrop-blur-2xl">
        <div className="flex flex-col justify-between h-full gap-4 z-10 w-full lg:w-1/2">
          <div className="flex flex-row gap-2 items-center text-sm">
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

          <div className="flex-1 flex flex-col justify-center gap-2">
            <p className="font-light text-3xl lg:text-5xl antialiased">
              {t(`hero.title`)}
            </p>
            <p className="font-bold tracking-wide text-4xl lg:text-6xl text-blue-600 uppercase antialiased">
              {t(`hero.titlebold`)}
            </p>
            <Separator />
            <p className="font-light text-sm lg:text-md text-muted-foreground">
              {t(`hero.description`)}
            </p>
          </div>
        </div>

        {/* Right side (image) */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full mt-10 lg:mt-0 flex justify-center items-end">
          <img
            src={SmilingImg}
            alt="smiling woman"
            className="object-cover h-[300px] lg:h-[550px] w-auto absolute bottom-0 lg:bottom-[-80px] left-1/2 lg:left-auto transform lg:translate-x-0 -translate-x-1/2"
          />
        </div>
      </div>
      <div className="relative  mx-5 sm:mx-0 rounded-lg overflow-hidden">
        <span className="absolute -top-10 -left-10 size-40 rounded-full bg-blue-400/50 dark:bg-blue-800/50 blur"></span>
        <span className="absolute -bottom-10 -right-10 size-40 rounded-full bg-blue-400/50 dark:bg-blue-800/50 blur"></span>
        <div className="relative flex flex-row justify-between items-start sm:items-center gap-4 p-5  sm:h-40 bg-background/50 border border-boder/50  rounded-lg w-full  backdrop-blur-2xl ">
          {displayedIndications.map((item, index) => (
            <>
              <div key={index} className="flex-1/4 flex flex-row">
                <div className="flex flex-col">
                  <h4 className="text-base sm:text-4xl font-medium tracking-tighter text-blue-600">
                    {item.main}
                  </h4>
                  <p className="text-sm sm:text-base font-light">
                    {item.secondary}
                  </p>
                </div>
              </div>
              {displayedIndications.length - 1 != index && (
                <Separator orientation="vertical" />
              )}
            </>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
