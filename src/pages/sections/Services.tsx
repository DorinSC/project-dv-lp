import SectionContainer from "@/components/sectionContainer";
import SectionLabel from "@/components/sectionLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "Extractia dintelui temporar",
    price: 700,
    description: "lorem ipsum loraren bisque sarex romanum",
  },
  { title: "Sinus lifting inchis", price: 3000 },
  { title: "Extractia dintelui permanent tipic", price: 800 },
  { title: "Sinus lifting deschis", price: 10000 },
  { title: "Extractia molarului 3", priceFrom: 700, priceTo: 3000 },
  { title: "PRF / aditie osoasa 0,5g", price: 4000 },
  { title: "Rezectie apicala cu chistectomie", price: 3500 },
  { title: "Suturarea", price: 250 },
  { title: "Frenoplastie", price: 2000 },
  { title: "Tratamentul alveolitei", price: 1000 },
  { title: "Augmentarea crestei alveolare", priceFrom: 4000, priceTo: 12000 },
  { title: "Chiuretaj subgingival arcada", price: 2000 },
];

const Services = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer className="flex flex-col">
      <SectionLabel>{t("services.title")}</SectionLabel>
      <div className="p-4 sm:p-10 border border-border/50 rounded-lg bg-background/50 backdrop-blur-2xl">
        <p className="text-center pb-2 text-muted-foreground  text-sm">
          {t("services.currencyDisclaimer")}
        </p>
        <Accordion type="single" collapsible>
          {services.map((service) => (
            <AccordionItem key={service.title} value={service.title}>
              <AccordionTrigger
                className={cn(
                  "flex items-center px-3 py-2 sm:px-5 sm:py-3 hover:bg-muted/50"
                )}
              >
                <div className="flex justify-between items-center w-full gap-2">
                  <div
                    className={cn(
                      "text-base sm:text-xl font-medium sm:font-thin w-full sm:w-1/2"
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
              <AccordionContent className="text-muted-foreground font-normal px-4 py-2 sm:px-10 sm:py-5 text-sm sm:text-base">
                {service.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
};

export default Services;
