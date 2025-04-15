import { AnimatedGroup } from "@/components/effects/animatedGroup";
import { useIsMobile } from "@/hooks/isMobile";

import person1Image from "@/assets/team/dentist1.jpg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

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
      className="relative overflow-hidden"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img src={img} alt={`${name} ${surname}`} className={cn("", className)} />

      {/* Always render this block and control visibility with opacity */}
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

  if (isMobile) {
    return <h1>this is mobile view for teams</h1>;
  } else {
    return (
      <div className="flex flex-col mx-20 my-8 gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold tracking-wide text-5xl text-blue-600 uppercase antialiased">
            Our Team
          </h1>
          <Separator />
        </div>

        <AnimatedGroup
          className="flex flex-row gap-4 justify-between"
          preset="blur"
        >
          {team.map((member) => (
            <MemberCard
              data={member}
              className="h-auto max-h-[400px] w-full rounded-lg"
            />
          ))}
        </AnimatedGroup>
      </div>
    );
  }
};

export default Team;
