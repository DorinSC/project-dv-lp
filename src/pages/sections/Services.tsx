import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/isMobile";

const Services = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <h1>this is mobile view for Services</h1>;
  } else {
    return (
      <div className="flex flex-col mx-20 my-8 gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold tracking-wide text-5xl text-blue-600 uppercase antialiased">
            Services
          </h1>
          <Separator />
        </div>

        <h1>services</h1>
      </div>
    );
  }
};

export default Services;
