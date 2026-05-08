import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Home() {
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

      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>

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

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#services" onClick={() => setMenuOpen(false)}>
      Services
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

  </div>
</div>

            {/* 🔥 HERO */}
            <section id="home" className="relative h-screen overflow-hidden">

                <img
                    src="/images/logo.png"
                    
                    className="absolute inset-0 w-full h-full object-cover md:object-cover object-[10%]"
                    alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">

                    <h1 className="text-5xl md:text-6xl font-semibold tracking-wide mb-6">
                        Koon-Service
                    </h1>

                    <p className="text-gray-300 mb-6 max-w-md">
                        Professional IT Solutions for Your Business
                    </p>


                    <button
                        onClick={() => {
                            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
                        }}
                        className="border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-300"
                    >
                        สำรวจบริษัท
                    </button>

                </div>
            </section>

            {/* 🔥 OUR SERVICE BAR */}
            <div className="bg-black py-4 text-center">
                <h2 className="text-white text-xl tracking-[0.3em] font-semibold">
                    OUR SERVICE
                </h2>
            </div>

            {/* 🔥 HERO SPLIT */}
            <div id="services" className="h-screen flex">

                {/* LEFT */}
                <div className="relative w-1/2 group overflow-hidden">
                    <img
                        src="/images/CCTV.png"
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
                         VIEW SERVICE
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
                         VIEW SERVICE
                        </button>
                        </Link>
                    </div>
                </div>

            </div>

            {/* 🧩 Services 
            <section id="services" className="py-16 bg-gray-100 reveal">
                <h2 className="text-3xl text-center font-bold mb-10">บริการของเรา</h2>

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
            </section>  */}

            {/* ⭐ About */}
            <section id="about" className="py-20 bg-gray-50">
                <h2 className="text-3xl text-center font-bold mb-10">ทำไมต้องเลือกเรา</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center px-4">
                    <div>
                        <h3 className="font-semibold text-xl mb-2">รวดเร็ว</h3>
                        <p>เราพร้อมให้บริการอย่างรวดเร็ว
                            ลดเวลาการหยุดชะงักของระบบ และช่วยให้ธุรกิจของคุณดำเนินงานได้อย่างต่อเนื่อง</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl mb-2">มืออาชีพ</h3>
                        <p>ทีมงานของเรามีประสบการณ์ด้าน IT มากกว่า 5 ปี
                            พร้อมแก้ไขปัญหาได้อย่างตรงจุดและมีประสิทธิภาพสูงสุด</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl mb-2">คุณภาพสูง</h3>
                        <p>เราใช้มาตรฐานระดับสากลในการให้บริการ
                            เพื่อให้ระบบของคุณมีความเสถียร ปลอดภัย และพร้อมใช้งานตลอดเวลา</p>
                    </div>
                </div>
            </section>

            {/* 📞 Contact */}
            <section id="contact" className="bg-black text-white py-20">

                <div className="max-w-6xl mx-auto px-6">

                    {/* 🔥 TITLE */}
                    <h2 className="text-3xl font-bold text-center mb-16">
                        ช่องทางติดต่อ
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
                                บริษัท คูนเซอร์วิส จำกัด (มหาชน)<br />
                                329 ม.10 ถนนสายหลัก แขวงบางเสาธง<br />
                                อำเภอบางเสาธง จังหวัดสมุทรปราการ 10570
                            </p>

                            <p className="text-red-500 mt-4 font-semibold">
                                โทร : 062-428-3696
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
                                บริษัท คูนเซอร์วิส จำกัด (มหาชน)<br />
                                18 ซอย ลาซาล 65 แขวงบางนาใต้<br />
                                เขตบางนา กรุงเทพมหานคร 10260
                            </p>

                            <p className="text-red-500 mt-4 font-semibold">
                                โทร : 062-428-3696
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
                                    <p>โทร : 062-428-3696 (คุณมาร์ค)</p>
                                    <p className="text-gray-400 text-sm">
                                        ทุกวัน : 8:00 - 17:00 น.
                                    </p>
                                </div>
                            </div>

                            {/* 💬 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-lg shrink-0">
                                    💬
                                </div>
                                <div>
                                    <p>Line : @koon_s</p>
                                    <p className="text-gray-400 text-sm">
                                        ทุกวัน : 8:00 - 17:00 น.
                                    </p>
                                </div>
                            </div>

                            {/* 📧 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-lg shrink-0">
                                    ✉️
                                </div>
                                <div>
                                    <p>E-mail : kvs_service@koonservice.com</p>
                                    <p className="text-gray-400 text-sm">
                                        ทุกวัน : 8:00 - 17:00 น.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* 🔻 Footer */}
            <footer className="bg-black text-gray-400 text-center py-6 text-sm">
                © 2026 Koon-Service. All rights reserved. พัฒนาโดย นักศึกษาสาขาเทคโนโลยีดิจิทัลและสารสนเทศ ระดับปริญญาตรี
            </footer>

        </div>
    );
}