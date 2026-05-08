import { Link } from "react-router-dom";
import { useState } from "react";

export default function ITService() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans text-gray-800">

      {/* 🔝 Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <Link to="/">
            <h1 className="font-bold text-xl tracking-wide hover:text-blue-600 transition">
              KOON-SERVICE
            </h1>
          </Link>
          <div className="hidden md:flex items-center gap-6">

  <Link to="/#home">Home</Link>
  <Link to="/#services">Services</Link>
  <Link to="/#about">About</Link>
  <Link to="/#contact">Contact</Link>

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

    <Link to="/#home" onClick={() => setMenuOpen(false)}>
      Home
    </Link>

    <Link to="/#services" onClick={() => setMenuOpen(false)}>
      Services
    </Link>

    <Link to="/#about" onClick={() => setMenuOpen(false)}>
      About
    </Link>

    <Link to="/#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </Link>

  </div>
</div>

      {/* 🔥 HERO */}
      <section id="home" className="relative h-screen">

        <img
          src="/images/itservice.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="logo"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-wide mb-6">
            IT Service
          </h1>


          <button
  onClick={() => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="border border-white px-8 py-3 hover:bg-white hover:text-black transition"
>
  สำรวจการบริการ
</button>

        </div>
      </section>

      {/* 🧩 INTRO */}
      <section id="intro" className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">
          บริการช่าง IT สำหรับองค์กร
        </h2>

        <p className="text-gray-600 leading-relaxed">
          เราให้บริการทีมช่าง IT Outsource ที่มีความเชี่ยวชาญ
          รองรับการติดตั้ง แก้ไข และดูแลระบบ IT
          เพื่อให้องค์กรของคุณทำงานได้อย่างต่อเนื่องและมีประสิทธิภาพ
        </p>
      </section>

      {/* 📋 DETAIL (เหมือนเว็บต้นแบบเลย) */}
      <section id="detail" className="py-20 bg-gray-100 text-center">

  <h2 className="text-3xl font-bold mb-12">
    ขอบเขตการให้บริการ
  </h2>

  {/* 🔥 ตัวนี้คือหัวใจ */}
  <div className="inline-grid md:grid-cols-2 gap-x-20 gap-y-4 text-left">

    {/* LEFT */}
    <ul className="space-y-4">
      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>ติดตั้งระบบคอมพิวเตอร์ และ Network</span>
      </li>

      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>ตรวจสอบและแก้ไขปัญหา Hardware / Software</span>
      </li>

      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>ดูแล Server และระบบภายในองค์กร</span>
      </li>

      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>Support ผู้ใช้งาน (Helpdesk)</span>
      </li>

      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>Setup ระบบ WiFi / LAN</span>
      </li>
    </ul>

    {/* RIGHT */}
    <ul className="space-y-4">
      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>บำรุงรักษาระบบ IT</span>
      </li>

      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>ดูแล Security / Firewall</span>
      </li>

      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>สำรองข้อมูล (Backup)</span>
      </li>

      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>Monitor ระบบ 24/7</span>
      </li>

      <li className="flex gap-3">
        <span className="text-green-500">✔</span>
        <span>ให้คำปรึกษาด้าน IT</span>
      </li>
    </ul>

  </div>
</section>


<section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    {/* 🔝 Header */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
        หากคุณกำลังเจอปัญหาเหล่านี้
      </h2>
    <Link to="/#contact">
      <button className="border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition">
        ติดต่อให้เราช่วยแก้ปัญหา
      </button>
      </Link>
    </div>

    {/* 🧩 Cards */}
    <div className="grid md:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/it1.png"
          alt="โปรเจคเยอะ"
          className="w-full max-h-[250px] object-contain mx-auto"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">โปรเจคเยอะ</h3>
          <p className="text-gray-600 text-sm">
            ต้องการช่างเพื่อรองรับโปรเจค
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/it2.png"
          alt="หาช่างไม่ได้"
          className="w-full max-h-[250px] object-contain mx-auto"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">หาช่างไม่ได้</h3>
          <p className="text-gray-600 text-sm">
            ไม่สามารถหาช่างที่มีทักษะได้
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/it3.png"
          alt="บริหารทีมไม่ได้"
          className="w-full max-h-[250px] object-contain mx-auto"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">บริหารทีมไม่ได้</h3>
          <p className="text-gray-600 text-sm">
            บริหารจัดการทีมงานจำนวนมากไม่ได้
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/it4.png"
          alt="งบประมาณจำกัด"
          className="w-full max-h-[250px] object-contain mx-auto"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">งบประมาณจำกัด</h3>
          <p className="text-gray-600 text-sm">
            ไม่สามารถจ้างพนักงานประจำเพิ่มได้
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 📞 CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          สนใจบริการ IT Service ?
        </h2>

        <p className="text-gray-300 mb-6">
          ปรึกษาผู้เชี่ยวชาญเพื่อออกแบบระบบที่เหมาะกับธุรกิจของคุณ
        </p>

        <Link to="/#contact">
   <button className="bg-red-500 px-6 py-3 rounded hover:bg-red-600 transition">
    ติดต่อเรา
    </button>
    </Link>
      </section>
    <footer className="bg-black text-gray-400 text-center py-6 text-sm">
                © 2026 Koon-Service. All rights reserved. พัฒนาโดย นักศึกษาสาขาเทคโนโลยีดิจิทัลและสารสนเทศ ระดับปริญญาตรี
            </footer>
    </div>
  );
}