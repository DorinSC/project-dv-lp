import SectionContainer from "@/components/sectionContainer";
import SectionLabel from "@/components/sectionLabel";
import { useTranslation } from "react-i18next";
import PlaceholderImage from "@/assets/placeholder.svg";
import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { images } from "@/data/gallery";

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
