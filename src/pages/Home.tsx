import GMap from "@/components/maps/gMap";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

import CTA from "@/pages/sections/CTA";
import Hero from "@/pages/sections/Hero";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <Hero />

      {/* call now cta */}
      <CTA />

      {/* Contact us */}
      <div className="h-[500px] flex flex-row mx-20 my-8 gap-8">
        <Card className="flex-1 bg-background/50 backdrop-blur-md">
          <CardContent className="flex flex-col h-full gap-8">
            <div className="flex-1 flex flex-col gap-2">
              <h1 className="text-lg font-semibold">
                Ne gasiti mereu <span className="text-2xl font-bold">aici</span>
              </h1>
              <p className="flex items-center gap-4">
                <MapPin className="size-4" />
                Strada Decebal 31, or. Bălți, Modova
              </p>
            </div>
            <Separator />
            <div className="flex-1 flex flex-col gap-2">
              <h1 className="text-lg font-semibold">
                Sunati in{" "}
                <span className="text-2xl font-bold">orice moment</span>
              </h1>
              <p className="flex items-center gap-4">
                <Phone className="size-4" /> +357 071234567
              </p>
              <p className="flex items-center gap-4">
                <Phone className="size-4" /> +357 071234567
              </p>
              <p className="flex items-center gap-4">
                <Mail className="size-4" /> dentalVlad@office.com
              </p>
            </div>
            <Separator />
            <div className="flex-1 flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Graficul de lucru</h1>
              <p>Luni - Vineri : 00:00 - 00:00</p>
              <p>Sambata - Duminica : Zi libera</p>
            </div>
          </CardContent>
        </Card>
        <div className="flex-2 rounded-xl overflow-hidden border border-border/50 shadow-sm">
          <GMap />
        </div>
      </div>
    </div>
  );
};

export default Home;
