"use client";

import ScrollAwake from "@/components/ScrollAwake";
import Image from "next/image";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const townhouseImages = [
  {
    src: "/townhouse_new.jpg",
    alt: "Luxury Townhouse — Street View",
    caption: "Exterior — Modern Townhouse at Dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
    alt: "Townhouse Exterior — Daytime",
    caption: "Exterior — Contemporary Multi-Level Townhouse",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    alt: "Townhouse Interior Living Area",
    caption: "Interior — Open-Plan Living & Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    alt: "Townhouse Rooftop Terrace",
    caption: "Outdoor — Private Rooftop Terrace",
  },
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () => goTo((current + 1) % townhouseImages.length);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.2)' }}>
      <div
        onClick={next}
        style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', cursor: 'pointer' }}
        title="Click to see next image"
      >
        {townhouseImages.map((img, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: i === current ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        ))}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.65))',
          padding: '2rem 1.5rem 1rem', color: '#fff', fontSize: '0.9rem',
          fontWeight: 500, letterSpacing: '0.5px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        }}>
          <span>{townhouseImages[current].caption}</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Click to next ›</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px', background: 'var(--background)' }}>
        {townhouseImages.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px',
            border: 'none', background: i === current ? 'var(--accent)' : 'var(--border-color)',
            cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
          }} />
        ))}
      </div>
    </div>
  );
}

export default function LuxuryTownhouses() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* TOP SECTION */}
      <div className="product-split-layout">
        <div className="product-content">
          <ScrollAwake>
            <h1 className="brand-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block' }}>Luxury Townhouses</h1>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--foreground)' }}>At JAC MediaLand,</strong> we present a collection of luxury townhouses that offer the perfect blend of suburban space and urban convenience. Our townhouse portfolio is designed for those who desire multi-level living, private outdoor areas, and sophisticated architectural design.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Our Approach:</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              We curate townhouses that maximize vertical space without compromising on elegance. Our focus is on properties featuring stunning facades, private rooftop terraces, integrated garages, and beautifully appointed interiors that cater to modern family life and entertaining.
            </p>
            
            <a href="tel:+919876543210" className="whatsapp-btn">
              <PhoneCall size={20} />
              +1 (234) 567-8900
            </a>
          </ScrollAwake>
        </div>
        
        <div className="product-image-wrapper">
          <ScrollAwake className="delay-2">
            <ImageCarousel />
          </ScrollAwake>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="product-split-layout" style={{ marginTop: '6rem', alignItems: 'flex-start' }}>
        
        {/* Left Column */}
        <div className="product-features-column">
          <ScrollAwake>
            <h2 className="brand-heading" style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'inline-block', borderBottom: 'none' }}>Key Features</h2>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <div className="product-feature-card">
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Multi-Level Elegance:</h3>
                <p>Enjoy intelligent, spacious floor plans that beautifully separate vibrant living and entertaining areas from quiet, private bedroom quarters across multiple floors.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Private Outdoor Sanctuaries:</h3>
                <p>Our featured townhouses offer exclusive outdoor living spaces, including beautifully landscaped courtyard gardens, expansive balconies, and private rooftop terraces.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>
        
        {/* Right Column */}
        <div className="product-features-column" style={{ marginTop: '4rem' }}>
          <ScrollAwake className="delay-1">
            <div className="product-feature-card">
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Exquisite Facades:</h3>
                <p>Make a lasting impression with striking exterior architecture, featuring premium materials and elegant street appeal that seamlessly blends modern design with classic charm.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Modern Convenience:</h3>
                <p>Experience the ease of urban living with built-in private parking or garages, state-of-the-art security systems, and fully integrated smart home infrastructure.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>

      </div>
    </div>
  );
}
