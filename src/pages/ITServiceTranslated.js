import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ITService() {
  const { t } = useTranslation();
  const pointsLeft = t("itService.pointsLeft", { returnObjects: true });
  const pointsRight = t("itService.pointsRight", { returnObjects: true });
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
          <h1 className="text-5xl font-bold mb-4">{t("itService.title")}</h1>
          <p className="max-w-2xl text-lg text-slate-200 mb-6">{t("itService.introText")}</p>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            {t("itService.ctaContact")}
          </button>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-100 text-slate-900 reveal">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">{t("itService.detailTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-8 rounded-3xl shadow-sm">
              {pointsLeft.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-indigo-600 font-bold">{index + 1}.</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 bg-white p-8 rounded-3xl shadow-sm">
              {pointsRight.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-indigo-600 font-bold">{index + 1}.</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("itService.problemsTitle")}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{t("common.contactHelp")}</p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-slate-100 p-8 rounded-3xl">
              <h3 className="font-semibold mb-2">{t("common.contactButton")}</h3>
              <p>{t("common.phone")}</p>
            </div>
            <div className="bg-slate-100 p-8 rounded-3xl">
              <h3 className="font-semibold mb-2">{t("common.line")}</h3>
              <p>{t("common.email")}</p>
            </div>
            <div className="bg-slate-100 p-8 rounded-3xl">
              <h3 className="font-semibold mb-2">{t("common.contactHelp")}</h3>
              <p>{t("home.contactTitle")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
