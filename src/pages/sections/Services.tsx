import SectionContainer from "@/components/sectionContainer";
import SectionLabel from "@/components/sectionLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { services, Service } from "@/data/serices";

const Services = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer className=" flex flex-col">
      <SectionLabel>{t("services.title")}</SectionLabel>

      <div className="relative rounded-lg overflow-hidden">
        <span className="absolute -top-10 -left-10 size-80 rounded-full bg-blue-400/50 dark:bg-blue-800/50 blur"></span>
        <span className="absolute -bottom-10 -right-10 size-80 rounded-full bg-blue-400/50 dark:bg-blue-800/50 blur"></span>
        <div className="relative p-4 sm:p-10 border border-border/50 rounded-lg bg-background/50 backdrop-blur-2xl overflow-hidden">
          <p className="text-center pb-2 text-muted-foreground  text-sm">
            {t("services.currencyDisclaimer")}
          </p>
          <Accordion type="single" collapsible>
            {services.map((service: Service) => (
              <AccordionItem key={service.title} value={service.title}>
                <AccordionTrigger
                  className={cn(
                    "flex items-center px-3 py-2 sm:px-5 sm:py-3 hover:cursor-pointer rounded-none"
                  )}
                >
                  <div className="flex justify-between items-center w-full gap-2">
                    <div
                      className={cn(
                        "text-base sm:text-xl font-medium w-full sm:w-1/2"
                      )}
                    >
                      {service.title}
                    </div>
                    <div className="text-sm sm:text-base font-light w-full sm:w-1/2 text-right sm:text-left">
                      {service.priceFrom && service.priceTo ? (
                        <>
                          {service.priceFrom} - {service.priceTo}
                        </>
                      ) : (
                        service.price
                      )}{" "}
                      Lei
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2 sm:px-10 sm:py-5 text-muted-foreground font-normal text-sm sm:text-base">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="w-lg" variant="ghost">
          Mai multe servicii
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Services;
