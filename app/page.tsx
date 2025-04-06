"use client";
import { useEffect, useRef } from "react";
import ComponentHeader from "./component/header/ComponentHeader";
import VideoBackground from "./component/videoBG/VideoBackground";
import ComponentBody from "./component/home/ComponentBody";
import ComponentHire from "./component/home/ComponentHire";
import ComponentBottom from "./component/home/ComponentBottom";

export default function Home() {
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const featureRef = useRef(null);

  useEffect(() => {
    const sections = [heroRef.current, productRef.current, featureRef.current];
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
    <div className="">
      <div className="mt-10">
        <div className=" w-[70%] m-auto">
          <ComponentHeader />
        </div>
        <div ref={heroRef} className="mt-[120px]">
          <ComponentBody />
        </div>
        <div ref={productRef} className="mt-[100px]">
          <ComponentHire />
        </div>
        <div ref={featureRef} className="">
          <ComponentBottom />
        </div>
      </div>
      <VideoBackground />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none" />
    </div>
  );
}
