import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const SectionContainer = ({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => {
  const isMobile = useIsMobile();
  return (
    <div
      id={id}
      className={cn(
        isMobile
          ? "flex flex-col px-5 my-10 gap-4"
          : "flex flex-row mx-20 my-10 gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
