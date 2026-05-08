import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true });
  const servicesArray = Array.isArray(services)
    ? services
    : Object.keys(services).map((key) => ({
        name: services[key],
        link: key === "itService" ? "/it-service" : `/${key}`,
      }));
  const whyItems = t("home.why", { returnObjects: true });
  const location = useLocation();

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

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <div className="font-sans pt-24">
      <section id="home" className="relative h-screen overflow-hidden">
        <img
          src="/images/logo.webp"
          alt="Koon Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-wide mb-6">
            KOON-SERVICE
          </h1>
          <p className="text-gray-300 mb-6 max-w-xl">
            {t("hero.subtitle")}
          </p>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-300"
          >
            {t("hero.cta")}
          </button>
        </div>
      </section>

      <div className="bg-black py-4 text-center">
        <h2 className="text-white text-xl tracking-[0.3em] font-semibold">
          {t("home.servicesTitle")}
        </h2>
      </div>

      <section id="services" className="py-16 bg-gray-100 reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {servicesArray.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="block bg-white p-6 rounded-3xl shadow hover:shadow-2xl transition duration-300 text-center"
              >
                <h3 className="font-semibold text-xl mb-3 text-black">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">{t("home.whyTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyItems.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl shadow-sm">
                <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black text-white py-20 reveal">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t("home.contactTitle")}</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/5 rounded-3xl p-8">
              <h3 className="font-semibold text-xl mb-3">KOONTHAVEESAPPAISARN COMPANY LIMITED</h3>
              <p className="leading-relaxed text-gray-200 whitespace-pre-line">{t("home.address1")}</p>
              <p className="mt-4 text-red-400 font-semibold">{t("common.phone")}</p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8">
              <h3 className="font-semibold text-xl mb-3">KOON-SERVICE (office)</h3>
              <p className="leading-relaxed text-gray-200 whitespace-pre-line">{t("home.address2")}</p>
              <p className="mt-4 text-red-400 font-semibold">{t("common.phone")}</p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 space-y-6">
              <div>
                <div className="text-3xl mb-3">📞</div>
                <p className="font-semibold">{t("common.phone")}</p>
                <p className="text-gray-400">{t("common.hours")}</p>
              </div>
              <div>
                <div className="text-3xl mb-3">💬</div>
                <p className="font-semibold">{t("common.line")}</p>
                <p className="text-gray-400">{t("common.hours")}</p>
              </div>
              <div>
                <div className="text-3xl mb-3">✉️</div>
                <p className="font-semibold">{t("common.email")}</p>
                <p className="text-gray-400">{t("common.hours")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
        {t("common.footer")}
      </footer>
    </div>
  );
}
