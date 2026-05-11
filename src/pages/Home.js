import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t, i18n } = useTranslation();
    const services = [
    { name: t("services.itService"), link: "/it-service" },
    { name: t("services.cctv"), link: "/cctv" },
    { name: t("services.equipment"), link: "/equipment" },
    { name: t("services.network"), link: "/network" },
  ];
    const whyItems = t("home.why", { returnObjects: true });
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const els = document.querySelectorAll(".reveal");
        els.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    const location = useLocation();

useEffect(() => {
    if (location.hash) {
        const el = document.getElementById(location.hash.replace("#", ""));
        if (el) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }
}, [location]);

    return (
        <div className="font-sans">

            {/* 🔝 Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                    <Link to="/">
                        <h1 className="font-bold text-xl tracking-wide hover:text-blue-600 transition">
              KOON-SERVICE
            </h1>

                    </Link>
                        <div className="hidden md:flex items-center gap-6">

      <a href="#home">{t("nav.home")}</a>
      <a href="#services">{t("nav.services")}</a>
      <a href="#about">{t("nav.about")}</a>
      <a href="#contact">{t("nav.contact")}</a>
        <select
        value={i18n.language}
  onChange={(e) => i18n.changeLanguage(e.target.value)}
  className="border rounded px-2 py-1 text-sm font-sans"
>
  <option value="th" >ไทย</option>
  <option value="en">EN</option>
</select>
    </div>
    
    {/* MOBILE MENU BUTTON */}
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
            {/* MOBILE SLIDE MENU */}
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
    <a href="#home" onClick={() => setMenuOpen(false)}>
      {t("nav.home")}
    </a>

    <a href="#services" onClick={() => setMenuOpen(false)}>
      {t("nav.services")}
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      {t("nav.about")}
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      {t("nav.contact")}
    </a>

  </div>
</div>

            {/* 🔥 HERO */}
            <section id="home" className="relative h-screen overflow-hidden">

                <img
                    src="/images/logo.webp"
                    
                    className="absolute inset-0 w-full h-full object-cover md:object-cover object-[10%]"
                    alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">

                    <h1 className="text-5xl md:text-6xl font-semibold tracking-wide mb-6">
                        Koon-Service
                    </h1>

                    <p className="text-gray-300 mb-6 max-w-md">
                        {t("hero.subtitle")}
                    </p>


                    <button
                        onClick={() => {
                            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
                        }}
                        className="border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-300"
                    >
                        {t("hero.cta")}
                    </button>

                </div>
            </section>

            {/* 🔥 OUR SERVICE BAR */}
            <div className="bg-black py-4 text-center">
                <h2 className="text-white text-xl tracking-[0.3em] font-semibold">
                    {t("home.servicesTitle")}
                </h2>
            </div>

            {/* 🔥 HERO SPLIT */}
            <div id="services" className="h-screen flex">

                {/* LEFT */}
                <div className="relative w-1/2 group overflow-hidden">
                    <img
                        src="/images/CCTV.webp"
                        alt="CCTV"
                        className="absolute inset-0 w-full h-full object-cover md:object-cover object-[35%]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            CCTV
                        </h2>

                        <div className="w-16 h-[2px] bg-white/50 mb-6"></div>

                        <Link to="/cctv">
                        <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
                         {t("common.viewService")}
                        </button>
                        </Link>
                    </div>
                </div>

                {/* เส้นกลาง */}
                <div className="w-[1px] bg-white/10"></div>

                {/* RIGHT */}
                <div className="relative w-1/2 group overflow-hidden">
                    <img
                        src="/images/service.png"
                        alt="CCTV"
                        className="absolute inset-0 w-full h-full object-cover md:object-cover object-[85%]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black-950/80 via-blue-900/40 to-transparent"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            IT Service
                        </h2>

                        <div className="w-16 h-[2px] bg-white/50 mb-6"></div>

                        <Link to="/it-service">
                        <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
                         {t("common.viewService")}
                        </button>
                        </Link>
                    </div>
                </div>

            </div>

            {/*🧩 Services */}
            <section id="services" className="py-16 bg-gray-100 reveal">
                <h2 className="text-3xl text-center font-bold mb-10">{t("home.servicesTitle")}</h2>

                <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
                    {services.map((item, i) => (
                        item.link ? (
                            <Link
                                key={i}
                                to={item.link}
                                className="block no-underline text-inherit"
                            >
                                <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center cursor-pointer">
                                    <h3 className="font-semibold text-lg text-black">
                                        {item.name}
                                    </h3>
                                </div>
                            </Link>
                        ) : (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-lg shadow text-center"
                            >
                                <h3 className="font-semibold text-lg text-black">
                                    {item.name}
                                </h3>
                            </div>
                        )
                    ))}
                </div>
            </section>  

            {/* ⭐ About */}
            <section id="about" className="py-20 bg-gray-50">
                <h2 className="text-3xl text-center font-bold mb-10">{t("home.whyTitle")}</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center px-4">
                    {whyItems.map((item, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 📞 Contact */}
            <section id="contact" className="bg-black text-white py-20">

                <div className="max-w-6xl mx-auto px-6">

                    {/* 🔥 TITLE */}
                    <h2 className="text-3xl font-bold text-center mb-16">
                        {t("home.contactTitle")}
                    </h2>

                    {/* 🔥 CONTENT */}
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16">

                        {/* 🔹 LEFT */}
                        <div className="text-center md:text-left max-w-md">

                            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                                <img
                                    src="/images/logokoon.jpg"
                                    alt="logo"
                                    className="w-14 h-14 rounded-full object-cover border border-gray-700"
                                />

                                <h3 className="text-xl font-semibold tracking-wide">
                                    KOONTHAVEESAPPAISARN 
                                    <br />COMPANY LIMITED
                                </h3>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                {t("home.address1")}
                            </p>

                            <p className="text-red-500 mt-4 font-semibold">
                                {t("common.phone")}
                            </p>

                        </div>
                        <div className="text-center md:text-left max-w-md">

                            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                                <img
                                    src="/images/logokoon.jpg"
                                    alt="logo"
                                    className="w-14 h-14 rounded-full object-cover border border-gray-700"
                                />

                                <h3 className="text-xl font-semibold tracking-wide">
                                    KOON-SERVICE (office)
                                </h3>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                {t("home.address2")}
                            </p>

                            <p className="text-red-500 mt-4 font-semibold">
                                {t("common.phone")}
                            </p>

                        </div>

                        {/* 🔹 RIGHT */}
                        <div className="space-y-8">

                            {/* 📞 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-lg shrink-0">
                                    📞
                                </div>
                                <div>
                                    <p>{t("common.phone")}</p>
                                    <p className="text-gray-400 text-sm">
                                        {t("common.hours")}
                                    </p>
                                </div>
                            </div>

                            {/* 💬 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-lg shrink-0">
                                    💬
                                </div>
                                <div>
                                    <p>{t("common.line")}</p>
                                    <p className="text-gray-400 text-sm">
                                        {t("common.hours")}
                                    </p>
                                </div>
                            </div>

                            {/* 📧 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-lg shrink-0">
                                    ✉️
                                </div>
                                <div>
                                    <p>{t("common.email")}</p>
                                    <p className="text-gray-400 text-sm">
                                        {t("common.hours")}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* 🔻 Footer */}
            <footer className="bg-black text-gray-400 text-center py-6 text-sm">
                {t("common.footer")}
            </footer>

        </div>
    );
}