import SectionContainer from "@/components/sectionContainer";
import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl backdrop-blur-xl border border-border shadow-md transition-colors",
          isMobile ? "flex-col gap-4 p-6 text-center" : "flex-row gap-10 p-10"
        )}
      >
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <div className={cn("max-w-md", isMobile ? "w-full" : "w-auto")}>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">
            {t(`notfound.title`)}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t(`notfound.message`)}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NotFound;
