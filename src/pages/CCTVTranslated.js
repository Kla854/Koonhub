import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CCTV() {
  const { t } = useTranslation();
  const pointsLeft = t("cctv.pointsLeft", { returnObjects: true });
  const pointsRight = t("cctv.pointsRight", { returnObjects: true });
  const cards = t("cctv.cards", { returnObjects: true });
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  return (
    <div className="font-sans pt-24">
      <section className="relative h-[50vh] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">{t("cctv.title")}</h1>
          <p className="max-w-2xl text-lg text-slate-200 mb-6">{t("cctv.introText")}</p>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            {t("cctv.ctaContact")}
          </button>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-100 text-slate-900 reveal">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">{t("cctv.detailTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-8 rounded-3xl shadow-sm">
              {pointsLeft.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-cyan-600 font-bold">{index + 1}.</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 bg-white p-8 rounded-3xl shadow-sm">
              {pointsRight.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-cyan-600 font-bold">{index + 1}.</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">{t("cctv.problemsTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="bg-slate-100 p-8 rounded-3xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
