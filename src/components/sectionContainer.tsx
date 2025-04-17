import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      id={id}
      className={cn(
        "flex flex-col z-20",
        isMobile ? "px-5 my-10 gap-4" : "mx-20 my-10 gap-8",
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionContainer;
