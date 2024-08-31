// components/SplashScreen.tsx
"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';

const SplashScreen = () => {
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splashRef.current) {
      gsap.to(splashRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        onComplete: () => {
          splashRef.current?.remove();
        },
      });
    }
  }, []);

  return (
    <div ref={splashRef} className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-2xl">Loading...</div>
    </div>
  );
};

export default SplashScreen;
