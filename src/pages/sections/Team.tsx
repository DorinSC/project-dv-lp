import { AnimatedGroup } from "@/components/effects/animatedGroup";
import { useIsMobile } from "@/hooks/isMobile";

import person1Image from "@/assets/team/dentist1.jpg";
import { cn } from "@/lib/utils";
import SectionContainer from "@/components/sectionContainer";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowEffect } from "@/components/effects/glowEffect";

interface Member {
  name: string;
  surname: string;
  jobPosition: string;
  description?: string;
  img: string;
}

const team: Member[] = [
  {
    name: "Jhon",
    surname: "Doe",
    jobPosition: "Dentist",
    description: "Very good doctor with big experience",
    img: person1Image,
  },
  {
    name: "Jhon",
    surname: "Doe",
    jobPosition: "Dentist",
    description: "Very good doctor with big experience",
    img: person1Image,
  },
  {
    name: "Jhon",
    surname: "Doe",
    jobPosition: "Dentist",
    description: "Very good doctor with big experience",
    img: person1Image,
  },
  {
    name: "Jhon",
    surname: "Doe",
    jobPosition: "Dentist",
    description: "Very good doctor with big experience",
    img: person1Image,
  },
  {
    name: "Jhon",
    surname: "Doe",
    jobPosition: "Dentist",
    description: "Very good doctor with big experience",
    img: person1Image,
  },
  {
    name: "Jhon",
    surname: "Doe",
    jobPosition: "Dentist",
    description: "Very good doctor with big experience",
    img: person1Image,
  },
];

const MemberCard = ({
  data,
  className,
}: {
  data: Member;
  className: string;
}) => {
  const { name, surname, jobPosition, description, img } = data;

  return (
    <div
      className={cn(
        "snap-start flex flex-col rounded-lg overflow-hidden",
        className
      )}
    >
      {/* Image section */}
      <div className="flex-grow relative h-2/3">
        <img
          src={img}
          alt={`${name} ${surname}`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Info section */}
      <div className="h-1/3 w-full p-4 bg-background flex flex-col justify-center">
        <p className="text-lg font-semibold text-blue-600 truncate">
          {jobPosition}, {name} {surname}
        </p>
        <p className="text-sm font-normal line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

const Team = () => {
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
          "relative inline-flex w-full  bg-blue-500 border-none",
          isMobile && "rounded-none "
        )}
      >
        <CardHeader>
          <CardTitle className="text-white font-thin tracking-tighter antialiased text-2xl ">
            {t("team.message")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex space-y-20  justify-center w-full h-full items-start">
          <AnimatedGroup
            className={cn(
              "flex flex-row gap-4 py-1 justify-start flex-nowrap overflow-x-auto scrollbar-hide scroll-snap-x snap-mandatory",
              isMobile && "pb-2"
            )}
            preset="blur"
          >
            {team.map((member, idx) => (
              <MemberCard
                key={idx}
                data={member}
                className={cn(
                  "rounded-lg",
                  isMobile
                    ? "min-w-[250px] h-[350px]"
                    : "min-w-[300px] max-w-[300px] h-[400px]"
                )}
              />
            ))}
          </AnimatedGroup>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default Team;
