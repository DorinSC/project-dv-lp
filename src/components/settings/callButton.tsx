import useCTAObserver from "@/hooks/useCTAObserver";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/isMobile";
import { handleCall } from "@/lib/handleCall";

const CallButton = () => {
  const isMobile = useIsMobile();
  const hasScrolledPastCTA = useCTAObserver();

  return (
    <Button
      variant="ghost"
      size={isMobile ? "icon" : "default"}
      className={cn(
        "text-green-600 hover:text-green-500 transition-all duration-500 ease-in-out transform",
        hasScrolledPastCTA
          ? "opacity-100 scale-100 backdrop-blur-sm"
          : "opacity-0 scale-95 pointer-events-none"
      )}
      onClick={() => isMobile && handleCall()}
    >
      <Phone className="h-4 w-4" />
      {!isMobile && "+373 0797 33 221"}
    </Button>
  );
};

export default CallButton;
