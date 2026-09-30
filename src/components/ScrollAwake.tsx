"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAwakeProps {
  children?: React.ReactNode;
  className?: string;
  tag?: any;
  style?: React.CSSProperties;
}

export default function ScrollAwake({
  children,
  className = "",
  tag = "div",
  style = {}
}: ScrollAwakeProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 40,
          rotationX: -10, // slight tilt for the "waking up" effect
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(1.2)", // bouncy awake feel
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const Tag = tag;

  return (
    <Tag ref={containerRef} className={`scroll-awake-wrapped ${className}`} style={{ ...style, willChange: "transform, opacity", perspective: "1000px", transformStyle: "preserve-3d" }}>
      {children}
    </Tag>
  );
}
