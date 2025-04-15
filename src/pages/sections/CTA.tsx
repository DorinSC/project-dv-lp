import { GlowEffect } from "@/components/effects/glowEffect";
import AnimatedWordCycle from "@/components/effects/textCycle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/isMobile";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="relative  my-8">
        <GlowEffect
          colors={["#4f39f6", "#155dfc", "#0084d1", "#0092b8"]}
          mode="colorShift"
          blur="medium"
          duration={4}
        />

        <div className="relative inline-flex w-full p-5 bg-blue-500">
          <div className="flex flex-col justify-between items-center gap-4 w-full ">
            <p className="text-xl font-thin text-accent text-center antialiased ">
              {t(`cta.message`)}{" "}
              <AnimatedWordCycle
                words={[
                  t(`cta.consultation`),
                  t(`cta.scaling`),
                  t(`cta.implant`),
                  t(`cta.cleaning`),
                  t(`cta.reconstruction`),
                ]}
                interval={3000}
              />
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="w-3xs text-lg font-semibold text-green-600"
            >
              <Phone className="size-4" />
              +357 07 1234 567
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative mx-10 my-8">
        <GlowEffect
          colors={["#4f39f6", "#155dfc", "#0084d1", "#0092b8"]}
          mode="colorShift"
          blur="medium"
          duration={4}
        />

        <Card className="relative inline-flex w-full p-10 bg-blue-500 border-none">
          <CardContent className="flex flex-row justify-between w-full ">
            <p className="text-2xl font-thin text-white antialiased ">
              {t(`cta.message`)}{" "}
              <AnimatedWordCycle
                words={[
                  t(`cta.consultation`),
                  t(`cta.scaling`),
                  t(`cta.implant`),
                  t(`cta.cleaning`),
                  t(`cta.cariesremoval`),
                  t(`cta.reconstruction`),
                ]}
                interval={3000}
              />
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="w-sm text-lg font-semibold text-green-600 hover:text-green-700 bg-green-100 hover:bg-green-200 transition-all ease-in-out duration-300"
            >
              <Phone className="size-4" />
              +357 07 1234 567
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default CTA;
