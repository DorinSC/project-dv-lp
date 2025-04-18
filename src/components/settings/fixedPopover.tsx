import { useIsMobile } from "@/hooks/isMobile";
import useCTAObserver from "@/hooks/useCTAObserver";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const FixedPopover = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const isMobile = useIsMobile();
  const hasScrolledPastCTA = useCTAObserver();
  return (
    <>
      {isMobile && (
        <div
          className={cn(
            "fixed flex flex-col bottom-5 right-5 gap-2 transition-all duration-500 ease-in-out transform",
            hasScrolledPastCTA
              ? "opacity-100 scale-100 "
              : "opacity-0 scale-95 pointer-events-none",
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default FixedPopover;
