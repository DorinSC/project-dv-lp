import { useIsMobile } from "@/hooks/isMobile";

const Services = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <h1>this is mobile view for Services</h1>;
  } else {
    return <div>Services desktop</div>;
  }
};

export default Services;
