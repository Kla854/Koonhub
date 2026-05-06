import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ITService from "./pages/ITService";
import CCTV from "./pages/CCTV";
import Equipment from "./pages/Equipment";
import Network from "./pages/Network";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";

export default function App() {
  return (
    <>
      {/* ทำให้เปลี่ยนหน้าแล้วขึ้นบนสุด */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-service" element={<ITService />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/network" element={<Network />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </>
  );
}