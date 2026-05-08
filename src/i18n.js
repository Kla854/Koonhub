import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import th from "./locales/th";
import en from "./locales/en";
import lo from "./locales/lo";
import mm from "./locales/mm";
import zh from "./locales/zh";
i18n.use(initReactI18next).init({
  resources: {
    th: { translation: th },
    en: { translation: en },
    lo: { translation: lo },
    mm: { translation: mm },
    zh: { translation: zh },
  },

  lng: "th",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;