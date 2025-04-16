import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const SectionLabel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const isMobile = useIsMobile();
  return (
    <div
      className={cn(
        "flex flex-col font-normal tracking-tighter antialiased",
        isMobile ? "text-3xl gap-2" : "text-5xl gap-4",
        className
      )}
    >
      <h1>{children}</h1>
      <Separator />
    </div>
  );
};

export default SectionLabel;
