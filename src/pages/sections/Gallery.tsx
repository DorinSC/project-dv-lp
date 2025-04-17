import SectionContainer from "@/components/sectionContainer";
import SectionLabel from "@/components/sectionLabel";
import { useTranslation } from "react-i18next";
import PlaceholderImage from "@/assets/placeholder.svg";
import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";
import ClinicPicture1 from "@/assets/clinic/clinic1.jpg";
import ClinicPicture2 from "@/assets/clinic/clinic2.jpg";
import ClinicPicture3 from "@/assets/clinic/clinic3.jpg";
import ClinicPicture4 from "@/assets/clinic/clinic4.jpg";
import ClinicPicture5 from "@/assets/clinic/clinic5.jpg";
import ClinicPicture6 from "@/assets/clinic/clinic6.jpg";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  { title: "img1", size: "md", img: ClinicPicture1 },
  { title: "img2", img: ClinicPicture2 },
  { title: "img3", img: ClinicPicture3 },
  { title: "img4", size: "md", img: ClinicPicture4 },
  { title: "img5", img: ClinicPicture5 },
  { title: "img6", img: ClinicPicture6 },
];

const ImageContainer = ({
  data,
  onClick,
}: {
  data: { title: string; img: string; size?: "lg" | "md" | "sm" };
  onClick: () => void;
}) => {
  const { title, img, size = "sm" } = data;
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "bg-background/50 border border-border/50 rounded-lg backdrop-blur-2xl overflow-hidden cursor-pointer",
        size === "lg"
          ? "col-span-3"
          : size === "md"
          ? "col-span-2"
          : "col-span-1",
        isMobile ? "h-38" : "h-48"
      )}
      onClick={onClick}
    >
      <img
        className="w-full h-full object-cover"
        alt={title}
        src={img || PlaceholderImage}
      />
    </div>
  );
};

const ImageDialog = ({
  open,
  onOpenChange,
  imgSrc,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imgSrc: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0">
        <div className="w-full h-full rounded-md overflow-hidden">
          <img
            src={imgSrc}
            alt="Selected"
            className="w-full h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Gallery = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleOpenDialog = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setOpenDialog(true);
  };

  return (
    <SectionContainer>
      <SectionLabel>{t("gallery.title")}</SectionLabel>
      <div className={cn("grid grid-cols-3 gap-8", isMobile && "grid-cols-2")}>
        {images.map((image) => (
          <ImageContainer
            key={image.title}
            data={image}
            onClick={() => handleOpenDialog(image.img)}
          />
        ))}
      </div>
      {selectedImage && (
        <ImageDialog
          open={openDialog}
          onOpenChange={setOpenDialog}
          imgSrc={selectedImage}
        />
      )}
    </SectionContainer>
  );
};

export default Gallery;
