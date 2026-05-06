import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage(); // 🔥 ดึงจาก global
  const [open, setOpen] = useState(false);

  const languages = {
    th: { label: "ไทย", flag: "🇹🇭" },
    en: { label: "English", flag: "🇬🇧" },
    lo: { label: "ລາວ", flag: "🇱🇦" },
    mm: { label: "မြန်မာ", flag: "🇲🇲" },
  };

  return (
    <div className="relative">

      {/* 🔘 ปุ่มหลัก */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
      >
        <span>{languages[lang].flag}</span>
        <span>{languages[lang].label}</span>
        <span>▼</span>
      </button>

      {/* 📂 Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-50">
          {Object.keys(languages).map((key) => (
            <div
              key={key}
              onClick={() => {
                setLang(key);     // 🔥 เปลี่ยนทั้งเว็บ
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span>{languages[key].flag}</span>
              <span>{languages[key].label}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}