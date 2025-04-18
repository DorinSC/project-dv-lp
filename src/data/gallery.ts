import ClinicPicture1 from "@/assets/clinic/clinic1.jpg";
import ClinicPicture2 from "@/assets/clinic/clinic2.jpg";
import ClinicPicture3 from "@/assets/clinic/clinic3.jpg";
import ClinicPicture4 from "@/assets/clinic/clinic4.jpg";
import ClinicPicture5 from "@/assets/clinic/clinic5.jpg";
import ClinicPicture6 from "@/assets/clinic/clinic6.jpg";

type ImageData = {
  title: string;
  img: string;
  size?: "sm" | "md" | "lg";
};

export const images: ImageData[] = [
  { title: "img1", size: "md", img: ClinicPicture1 },
  { title: "img2", img: ClinicPicture2 },
  { title: "img3", img: ClinicPicture3 },
  { title: "img4", size: "md", img: ClinicPicture4 },
  { title: "img5", img: ClinicPicture5 },
  { title: "img6", img: ClinicPicture6 },
];
