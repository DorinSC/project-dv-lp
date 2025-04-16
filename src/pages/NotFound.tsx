import SectionContainer from "@/components/sectionContainer";
import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <SectionContainer className="flex flex-col items-center justify-center min-h-[60vh]">
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl backdrop-blur-xl border border-border shadow-xl bg-background/70 transition-all",
          isMobile ? "flex-col gap-6 p-6 text-center" : "flex-row gap-12 p-12"
        )}
      >
        <div className="text-primary text-[80px] sm:text-[120px] font-bold ">
          404
        </div>
        <div
          className={cn(
            "flex flex-col",
            isMobile ? "items-center" : "items-start"
          )}
        >
          <h2 className="text-2xl sm:text-3xl font-thin text-foreground mb-2">
            {t("notfound.title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-4 max-w-xs sm:max-w-md">
            {t("notfound.message")}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NotFound;
