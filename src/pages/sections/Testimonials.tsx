import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowEffect } from "@/components/effects/glowEffect";
import SectionContainer from "@/components/sectionContainer";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/isMobile";
import AnimatedDivCycle from "@/components/effects/containerCycle";
import FbIcon from "@/assets/icons/facebookIcon.png";
import GIcon from "@/assets/icons/googleIcon.png";
import InstaIcon from "@/assets/icons/instagramIcon.png";
import { useTranslation } from "react-i18next";
import { testimonials, Testimonial } from "@/data/testimonials";

const StarRating = ({ rating = 0 }: { rating?: number }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index + 1 <= Math.floor(rating);
        const half = index + 0.5 === rating;

        return (
          <Star
            key={index}
            className={cn(
              "size-4",
              filled
                ? "fill-amber-400 text-amber-400"
                : half
                ? "fill-amber-400 text-input"
                : "fill-input text-input"
            )}
          />
        );
      })}
    </div>
  );
};

const sourceIcons: Record<string, string> = {
  google: GIcon,
  facebook: FbIcon,
  instagram: InstaIcon,
};

const TestimonialCard = (data: Testimonial) => {
  const { name, surname, text, rating, source } = data;
  return (
    <div
      className="bg-muted rounded-lg p-4 flex flex-col
     gap-4 h-full"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center justify-center">
          {source && (
            <img
              className="h-6 w-6"
              src={sourceIcons[source.toLowerCase()] ?? InstaIcon}
              alt={source}
            />
          )}
          <StarRating rating={rating} />
        </div>
      </div>
      <p className="text-muted-foreground max-w-xs text-base h-full">{text}</p>
      <h1 className=" text-xl font-thin tracking-tight text-right">
        {name} {surname}
      </h1>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <SectionContainer className={cn("relative ", isMobile ? "px-0" : "mx-10")}>
      <GlowEffect
        colors={["#4f39f6", "#155dfc", "#0084d1", "#0092b8"]}
        mode="colorShift"
        blur="medium"
        duration={4}
      />

      <Card
        className={cn(
          "relative inline-flex w-full h-[300px] bg-blue-500 border-none rounded-lg",
          isMobile && "rounded-none h-[400px]"
        )}
      >
        <CardHeader>
          <CardTitle className="text-white font-thin tracking-tighter antialiased text-2xl ">
            {t("testimonials.message")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex space-y-20 justify-center w-full h-full items-start">
          <AnimatedDivCycle
            interval={5000}
            cols={isMobile ? 2 : 3}
            className=""
          >
            {testimonials.map((testimonial: Testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                surname={testimonial.surname}
                text={testimonial.text}
                rating={testimonial.rating}
                source={testimonial.source}
              />
            ))}
          </AnimatedDivCycle>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default Testimonials;
