import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <Link to="/">
            <h1 className="font-bold text-xl tracking-wide hover:text-blue-600 transition">
              {t("common.logo")}
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/#home">{t("nav.home")}</Link>
            <Link to="/#services">{t("nav.services")}</Link>
            <Link to="/#about">{t("nav.about")}</Link>
            <Link to="/#contact">{t("nav.contact")}</Link>
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="th">{t("language.th")}</option>
              <option value="en">{t("language.en")}</option>
              <option value="lo">{t("language.lo")}</option>
              <option value="mm">{t("language.mm")}</option>
            </select>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl font-bold"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6 text-lg font-medium">
          <Link to="/#home" onClick={() => setMenuOpen(false)}>{t("nav.home")}</Link>
          <Link to="/#services" onClick={() => setMenuOpen(false)}>{t("nav.services")}</Link>
          <Link to="/#about" onClick={() => setMenuOpen(false)}>{t("nav.about")}</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</Link>
          <select
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
              setMenuOpen(false);
            }}
            value={i18n.language}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="th">{t("language.th")}</option>
            <option value="en">{t("language.en")}</option>
            <option value="lo">{t("language.lo")}</option>
            <option value="mm">{t("language.mm")}</option>
          </select>
        </div>
      </div>
    </>
  );
}
