"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollBlurRevealProps {
  children: React.ReactNode;
  className?: string;
  blurAmount?: string;
  duration?: number;
}

export default function ScrollBlurReveal({
  children,
  className = "",
  blurAmount = "15px",
  duration = 1.2
}: ScrollBlurRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          filter: `blur(${blurAmount})`,
          y: 40
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, [blurAmount, duration]);

  return (
    <div ref={containerRef} className={className} style={{ willChange: "transform, opacity, filter" }}>
      {children}
    </div>
  );
}
