import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const languages = [
  { label: "English", value: "en" },
  { label: "Italiano", value: "it" },
  { label: "Română", value: "ro" },
  { label: "Русский", value: "ru" },
  { label: "Украинский", value: "ua" },
];

const LanguageSwitch: React.FC = () => {
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
        <Button variant="ghost">{selectedLang}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleChangeLanguage(item.value, item.label)}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitch;
