import SectionContainer from "@/components/sectionContainer";
import SectionLabel from "@/components/sectionLabel";
import { useIsMobile } from "@/hooks/isMobile";

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <SectionContainer className="flex flex-col">
      <SectionLabel>Services</SectionLabel>

      <h1>services</h1>
    </SectionContainer>
  );
};

export default Services;
