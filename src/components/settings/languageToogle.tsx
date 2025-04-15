import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import enFlag from "@/assets/flags/uk.png";
import frFlag from "@/assets/flags/fr.png";
import itFlag from "@/assets/flags/it.png";
import deFlag from "@/assets/flags/de.png";
import roFlag from "@/assets/flags/ro.png";
import ruFlag from "@/assets/flags/ru.png";
import uaFlag from "@/assets/flags/ua.png";
import { useIsMobile } from "@/hooks/isMobile";

const languages = [
  { label: "English", value: "en", icon: enFlag },
  { label: "Français", value: "fr", icon: frFlag },
  { label: "Italiano", value: "it", icon: itFlag },
  { label: "Deutsch", value: "de", icon: deFlag },
  { label: "Română", value: "ro", icon: roFlag },
  { label: "Русский", value: "ru", icon: ruFlag },
  { label: "Украинский", value: "ua", icon: uaFlag },
];

const LanguageToggle: React.FC = () => {
  const isMobile = useIsMobile();
  const { i18n } = useTranslation();

  const getLanguageLabel = (lng: string): string => {
    const match = languages.find((l) => l.value === lng);
    return match?.label ?? "Română"; // fallback label
  };

  const [selectedLang, setSelectedLang] = useState<string>("");

  useEffect(() => {
    // Strip regional codes (e.g. "en-US" → "en")
    const currentLang = i18n.language.split("-")[0];
    setSelectedLang(getLanguageLabel(currentLang));
  }, [i18n.language]);

  const handleChangeLanguage = (value: string, label: string) => {
    i18n.changeLanguage(value);
    setSelectedLang(label);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {isMobile ? (
          <Button variant="ghost" size="icon">
            <img
              src={
                languages.find((l) => l.label === selectedLang)?.icon ??
                "/assets/flags/ro.png"
              }
              alt={selectedLang}
              className="w-5 h-5  "
            />
          </Button>
        ) : (
          <Button variant="ghost">
            <img
              src={
                languages.find((l) => l.label === selectedLang)?.icon ??
                "/assets/flags/ro.png"
              }
              alt={selectedLang}
              className="w-5 h-5 "
            />
            {!isMobile && selectedLang}
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-border bg-popover">
        {languages.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleChangeLanguage(item.value, item.label)}
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
