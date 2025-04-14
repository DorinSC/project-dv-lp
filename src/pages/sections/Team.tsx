import { useIsMobile } from "@/hooks/isMobile";

const Team = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <h1>this is mobile view for teams</h1>;
  } else {
    return <div>teams desktop</div>;
  }
};

export default Team;
