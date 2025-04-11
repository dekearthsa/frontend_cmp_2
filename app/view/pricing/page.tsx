"use client";
// import Image from "next/image";
import ComponentHeader from "../../component/header/ComponentHeader";
import VideoBackground2 from "../../component/videoBG/VideoBackground2";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
const PricingPage = () => {
  const boxes = Array(5).fill(null); // มี 5 กล่อง
  const apiRef = useRef(null);

  useEffect(() => {
    const sections = [apiRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <div className="mt-10">
        <div className=" w-[70%] m-auto ">
          <ComponentHeader />
        </div>
      </div>
      <div className="mt-[120px]">
        <div className="grid grid-cols-5 h-[500px] w-[80%] m-auto gap-3">
          {boxes.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // เริ่มต้นจาง + เลื่อนลงเล็กน้อย
              animate={{ opacity: 1, y: 0 }} // เมื่อ animate แล้วให้ชัด + เลื่อนขึ้น 0
              transition={{
                delay: index * 0.2, // ดีเลย์ตามลำดับ index * 0.2 วินาที
                duration: 0.5, // ระยะเวลาเล่นแอนิเมชันแต่ละตัว
              }}
              className="border-[1px] border-gray-600 rounded-lg bg-gray-100/80"
            />
          ))}
        </div>
      </div>
      <div
        className="mt-[120px] h-[50vh] bg-slate-700/80 opacity-0"
        ref={apiRef}
      ></div>

      <VideoBackground2 />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none" />
    </div>
  );
};

export default PricingPage;
