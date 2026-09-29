"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalScrollAwake() {
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Select all elements we want to animate globally within the main content
      const elements = gsap.utils.toArray(
        "main p, main h1, main h2, main h3, main h4, main h5, main h6, main svg, main img, .premium-btn, .process-card, .service-card, .testimonial-card, .service-icon-card"
      ) as HTMLElement[];

      elements.forEach((el) => {
        // Skip elements that are inside our specific ScrollAwake wrapper to avoid double animation
        // Also skip navigation elements, SplitText characters/words, etc.
        if (
          el.closest('.scroll-awake-wrapped') || 
          el.classList.contains('scroll-awake-wrapped') ||
          el.closest('.split-parent') ||
          el.closest('nav') ||
          el.closest('header') ||
          el.classList.contains('welcome-heading') ||
          el.classList.contains('brand-heading')
        ) {
          return;
        }

        // Apply initial hidden state
        gsap.set(el, {
          opacity: 0,
          scale: 0.95,
          y: 40,
          rotationX: -10,
          perspective: 1000,
          transformStyle: "preserve-3d",
          willChange: "transform, opacity"
        });

        // Create the scroll trigger
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
          }
        });
      });
    });

    return () => ctx.revert();
  }, [pathname]); // Re-run when route changes

  return null;
}
