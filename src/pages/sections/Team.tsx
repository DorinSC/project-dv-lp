import { AnimatedGroup } from "@/components/effects/animatedGroup";
import { useIsMobile } from "@/hooks/isMobile";

import person1Image from "@/assets/team/dentist1.jpg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import SectionLabel from "@/components/sectionLabel";
import SectionContainer from "@/components/sectionContainer";

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
];

const MemberCard = ({
  data,
  className,
}: {
  data: Member;
  className: string;
}) => {
  const { name, surname, jobPosition, description, img } = data;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div
      className="relative overflow-hidden snap-start"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img
        src={img}
        alt={`${name} ${surname}`}
        className={cn("object-cover w-full h-full", className)}
      />

      <div
        className={cn(
          "absolute bottom-0 h-1/3 w-full p-4 rounded-b-lg text-muted-foreground transition-all duration-300 ease-in-out",
          showDetails
            ? "opacity-100 backdrop-blur-sm"
            : "opacity-0 backdrop-blur-none"
        )}
      >
        <p className="flex flex-row gap-2 text-lg font-semibold text-blue-600">
          {jobPosition}, {name} {surname}
        </p>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const isMobile = useIsMobile();

  return (
    <SectionContainer className="flex flex-col">
      <SectionLabel>Our team</SectionLabel>

      <AnimatedGroup
        className={cn(
          "flex flex-row gap-4 justify-start flex-nowrap overflow-x-auto scrollbar-hide scroll-snap-x snap-mandatory",
          isMobile && "pb-2"
        )}
        preset="blur"
      >
        {team.map((member, idx) => (
          <MemberCard
            key={idx}
            data={member}
            className={cn(
              "rounded-lg flex-shrink-0",
              isMobile ? "min-w-[250px] h-[350px]" : "w-full max-h-[400px]"
            )}
          />
        ))}
      </AnimatedGroup>
    </SectionContainer>
  );
};

export default Team;
