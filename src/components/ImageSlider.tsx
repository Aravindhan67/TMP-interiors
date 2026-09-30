"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/kitchen_new.jpg",
  "/living_new.jpg",
  "/office_new.jpg",
  "/cafe_new.jpg"
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100%', 
      minHeight: '500px',
      borderRadius: '16px', 
      overflow: 'hidden', 
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
    }}>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`JAC MediaLand Design ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
