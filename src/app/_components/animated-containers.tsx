"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';

type AnimatedContainersProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedContainers: React.FC<AnimatedContainersProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { top } = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start animation when element is in view
      if (top < viewportHeight * 0.8) {
        gsap.to(element, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' });
      }
    };

    // Initial state with transition
    gsap.set(element, { opacity: 0, y: 40, transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial display

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`transition-opacity transition-transform ${className}`} // Apply transition classes
      ref={containerRef}
      style={{ opacity: 0, transform: 'translateY(40px)' }} // Initial style
    >
      {children}
    </div>
  );
};

export default AnimatedContainers;
