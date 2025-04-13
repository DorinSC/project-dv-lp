import GMap from "@/components/maps/gMap";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("welcome")}

      {/* contact us */}
      <Card>
        <CardContent>
          <div className="flex flex-row gap-4 h-[400px]">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1">
                <h1>Ne gasiti aici</h1>
                <p> Strada Decebal 31, or. Bălți, Modova</p>
              </div>
              <Separator />
              <div className="flex-1">
                <h1>Sunati in orice moment</h1>
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
              <div className="flex-1">
                <h1>Graficul de lucru</h1>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="relative flex-2 w-[600px] h-full rounded-xl overflow-hidden ">
              <GMap />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
