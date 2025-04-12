import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en.json";
import it from "@/locales/it.json";
import ro from "@/locales/ro.json";
import ru from "@/locales/ru.json";
import ua from "@/locales/ua.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
      ro: { translation: ro },
      ru: { translation: ru },
      ua: { translation: ua },
    },
    fallbackLng: "ro",
    supportedLngs: ["en", "it", "ro", "ru", "ua"], // ✅ this is important
    load: "languageOnly", // ✅ strips regional codes like "en-US" → "en"
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"], // optional: customize detection
      caches: ["localStorage"], // optional: store user choice
    },
  });

export default i18n;
