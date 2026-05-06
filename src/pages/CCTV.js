import { Link } from "react-router-dom";

export default function CCTV() {
    return (
    <div className="font-sans text-gray-800">

      {/* 🔝 Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <Link to="/">
            <h1 className="font-bold text-xl tracking-wide hover:text-blue-600 transition">
              KOON-SERVICE
            </h1>
          </Link>
          <div className="flex items-center gap-6">

  <Link to="/#home">Home</Link>
  <Link to="/#services">Services</Link>
  <Link to="/#about">About</Link>
  <Link to="/#contact">Contact</Link>

</div>
        </div>
      </nav>

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
            CCTV & SECURITY
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
  บริการติดตั้งและดูแลระบบ CCTV & Security
</h2>

<p className="text-gray-600 leading-relaxed">
  เราให้บริการออกแบบ ติดตั้ง และดูแลระบบกล้องวงจรปิด (CCTV)
  พร้อมระบบรักษาความปลอดภัยแบบครบวงจร สำหรับองค์กร อาคารสำนักงาน โรงงาน และธุรกิจทุกประเภท
  โดยทีมงานมืออาชีพ เพื่อเพิ่มความปลอดภัยและความมั่นใจให้กับธุรกิจของคุณ
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
    <span>ออกแบบและติดตั้งระบบ CCTV ตามพื้นที่ใช้งาน</span>
  </li>

  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>ติดตั้งกล้อง IP Camera และ Analog Camera</span>
  </li>

  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>วางระบบสายสัญญาณและอุปกรณ์เครือข่าย</span>
  </li>

  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>ติดตั้งเครื่องบันทึกภาพ (NVR / DVR)</span>
  </li>

  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>ตั้งค่าดูภาพผ่านมือถือและอินเทอร์เน็ต</span>
  </li>
</ul>

    {/* RIGHT */}
    <ul className="space-y-4">
  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>ดูแลและบำรุงรักษาระบบ CCTV</span>
  </li>

  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>ตรวจสอบและแก้ไขปัญหาระบบกล้อง</span>
  </li>

  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>ปรับปรุงและอัปเกรดระบบเดิม</span>
  </li>

  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>ให้คำปรึกษาด้านระบบรักษาความปลอดภัย</span>
  </li>

  <li className="flex gap-3">
    <span className="text-green-500">✔</span>
    <span>บริการดูแลระบบแบบรายเดือน (Maintenance)</span>
  </li>
</ul>

  </div>
</section>


<section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    {/* 🔝 Header */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
        ปัญหาที่ธุรกิจมักพบเกี่ยวกับระบบ CCTV
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
          src="/images/p1.jpg"
          alt="โปรเจคเยอะ"
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">มองเห็นไม่ชัด</h3>
          <p className="text-gray-600 text-sm">
            ภาพไม่คมชัด หรือมองไม่เห็นในเวลากลางคืน
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/p2.jpg"
          alt="ติดตั้งไม่ถูกต้อง"
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">ติดตั้งไม่ถูกต้อง</h3>
          <p className="text-gray-600 text-sm">
            มุมกล้องไม่ครอบคลุมพื้นที่สำคัญ
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/p3.jpg"
          alt="ระบบไม่เสถียร"
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">ระบบไม่เสถียร</h3>
          <p className="text-gray-600 text-sm">
            กล้องหลุดบ่อย หรือไม่สามารถดูย้อนหลังได้
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="/images/p4.jpg"
          alt="ไม่มีผู้ดูแลระบบ"
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">ไม่มีผู้ดูแลระบบ</h3>
          <p className="text-gray-600 text-sm">
            ไม่มีทีมดูแลระบบเมื่อเกิดปัญหา
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 📞 CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          สนใจบริการ CCTV & Security ?
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