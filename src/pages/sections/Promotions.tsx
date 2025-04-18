import SectionContainer from "@/components/sectionContainer";
import SectionLabel from "@/components/sectionLabel";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import PlaceholderImage from "@/assets/placeholder.svg";
import { useIsMobile } from "@/hooks/isMobile";
import { Button } from "@/components/ui/button";
import { promotions, Promotion } from "@/data/promotions";

const PromotionStatus = ({ status }: { status: "expired" | "active" }) => {
  return (
    <span className="relative flex size-2">
      <span
        className={cn(
          "absolute inline-flex h-full w-full  rounded-full  opacity-50",
          status === "expired" ? "bg-red-500" : "bg-green-500 animate-ping"
        )}
      ></span>
      <span
        className={cn(
          "relative inline-flex size-2 rounded-full opacity-50",
          status === "expired" ? "bg-red-500" : "bg-green-500"
        )}
      ></span>
    </span>
  );
};

function isTodayBetween(startDate: string, endDate: string) {
  const today = new Date();
  const [startDay, startMonth, startYear] = startDate.split("-").map(Number);
  const [endDay, endMonth, endYear] = endDate.split("-").map(Number);

  const start = new Date(startYear, startMonth - 1, startDay);
  const end = new Date(endYear, endMonth - 1, endDay);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return today >= start && today <= end;
}

const PromotionCard = ({ data }: { data: Promotion }) => {
  const { title, description, img, startDate, endDate } = data;
  const status = isTodayBetween(startDate, endDate) ? "active" : "expired";
  const isMobile = useIsMobile();
  return (
    <div className=" flex flex-row h-40 bg-background/50 border border-border/50 rounded-lg backdrop-blur-2xl overflow-hidden">
      <img className="w-40 h-40 object-cover" src={img || PlaceholderImage} />
      <div className="flex flex-col w-full p-4 gap-1 overflow-hidden">
        <p
          className={cn(
            "text-sm sm:text-base font-light text-muted-foreground",
            isMobile && "text-xs"
          )}
        >
          {startDate} - {endDate}
        </p>
        <h3
          className={cn(
            "text-base sm:text-xl font-medium tracking-tighter text-blue-600",
            isMobile && "text-2xl"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-muted-foreground font-normal text-sm sm:text-base",
            isMobile && "text-sm"
          )}
        >
          {description}
        </p>
      </div>
      <div className="absolute top-2 right-2">
        <PromotionStatus status={status} />
      </div>
    </div>
  );
};

const Promotions = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <SectionContainer>
      <SectionLabel>{t("promotions.title")}</SectionLabel>
      <div className={cn("grid grid-cols-2 gap-8", isMobile && "grid-cols-1")}>
        {promotions.map((promo: Promotion) => (
          <PromotionCard key={promo.title} data={promo} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="w-lg" variant="ghost">
          Mai multe promotii
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Promotions;
