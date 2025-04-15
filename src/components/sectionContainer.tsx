import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const SectionContainer = ({
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
        isMobile ? "px-5 my-10 gap-4" : "mx-20 my-10 gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
