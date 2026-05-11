import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ITService() {

  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans text-gray-800">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

          <Link to="/">
            <h1 className="font-bold text-xl tracking-wide hover:text-blue-600 transition">
              KOON-SERVICE
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-6">

            <Link to="/#home">{t("nav.home")}</Link>
            <Link to="/#services">{t("nav.services")}</Link>
            <Link to="/#about">{t("nav.about")}</Link>
            <Link to="/#contact">{t("nav.contact")}</Link>

            <select
            value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="th">ไทย</option>
              <option value="en">EN</option>
            </select>

          </div>

          {/* MOBILE BUTTON */}
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

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6 text-lg font-medium">
        <select
  value={i18n.language}
  onChange={(e) => i18n.changeLanguage(e.target.value)}
  className="border rounded px-2 py-2 text-base"
>
  <option value="th">ไทย</option>
  <option value="en">EN</option>
</select>
          <Link to="/#home" onClick={() => setMenuOpen(false)}>
            {t("nav.home")}
          </Link>

          <Link to="/#services" onClick={() => setMenuOpen(false)}>
            {t("nav.services")}
          </Link>

          <Link to="/#about" onClick={() => setMenuOpen(false)}>
            {t("nav.about")}
          </Link>

          <Link to="/#contact" onClick={() => setMenuOpen(false)}>
            {t("nav.contact")}
          </Link>

        </div>
      </div>

      {/* 🔥 HERO */}
      <section id="home" className="relative h-screen">

        <img
          src="/images/it.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="logo"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-wide mb-6">
            {t("network.title")}
          </h1>


          <button
  onClick={() => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="border border-white px-8 py-3 hover:bg-white hover:text-black transition"
>
  {t("common.explore")}
</button>

        </div>
      </section>

      {/* 🧩 INTRO */}
      <section id="intro" className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">
          {t("network.introTitle")}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {t("network.introText")}
        </p>
      </section>

      {/* 📋 DETAIL (เหมือนเว็บต้นแบบเลย) */}
      <section id="detail" className="py-20 bg-gray-100 text-center">

  <h2 className="text-3xl font-bold mb-12">
    {t("network.detailTitle")}
  </h2>

  {/* 🔥 ตัวนี้คือหัวใจ */}
  <div className="inline-grid md:grid-cols-2 gap-x-20 gap-y-4 text-left">

    {/* LEFT */}
          <ul className="space-y-4">

            {t("network.pointsLeft", {
              returnObjects: true,
            }).map((item, index) => (

              <li key={index} className="flex gap-3">

                <span className="text-green-500">✔</span>

                <span>{item}</span>

              </li>

            ))}

          </ul>
    {/* RIGHT */}{/* LEFT */}
          <ul className="space-y-4">

            {t("network.pointsRight", {
              returnObjects: true,
            }).map((item, index) => (

              <li key={index} className="flex gap-3">

                <span className="text-green-500">✔</span>

                <span>{item}</span>

              </li>

            ))}

          </ul>
    

  </div>
</section>


<section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    {/* 🔝 Header */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
        {t("network.problemsTitle")}
      </h2>

      <Link to="/#contact">
      <button className="border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition">
        {t("network.ctaContactText")}
      </button>
      </Link>
    </div>

    {/* 🧩 Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">

      {/* Card 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/p1.jpg"
          alt={t("network.cards.0.title")}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">{t("network.cards.0.title")}</h3>
          <p className="text-gray-600 text-sm">
            {t("network.cards.0.desc")}
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/p2.jpg"
          alt={t("network.cards.1.title")}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">{t("network.cards.1.title")}</h3>
          <p className="text-gray-600 text-sm">
            {t("network.cards.1.desc")}
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/p3.jpg"
          alt={t("network.cards.2.title")}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">{t("network.cards.2.title")}</h3>
          <p className="text-gray-600 text-sm">
            {t("network.cards.2.desc")}
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/p4.jpg"
          alt={t("network.cards.3.title")}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">{t("network.cards.3.title")}</h3>
          <p className="text-gray-600 text-sm">
            {t("network.cards.3.desc")}
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 📞 CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t("network.ctaTitle")}
        </h2>

        <p className="text-gray-300 mb-6">
          {t("equipment.ctaText")}
        </p>

        <Link to="/#contact">
   <button className="bg-red-500 px-6 py-3 rounded hover:bg-red-600 transition">
    {t("common.contactButton")}
    </button>
    </Link>
      </section>
      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
                © 2026 Koon-Service. All rights reserved. พัฒนาโดย นักศึกษาสาขาเทคโนโลยีดิจิทัลและสารสนเทศ ระดับปริญญาตรี
            </footer>
    </div>
  );
}