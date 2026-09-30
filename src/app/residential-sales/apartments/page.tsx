"use client";

import ScrollAwake from "@/components/ScrollAwake";
import Image from "next/image";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const apartmentImages = [
  {
    src: "/apartment_new.jpg",
    alt: "Luxury Apartment — City View Interior",
    caption: "Interior — Open-Plan Living with Panoramic City View",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    alt: "Modern Apartment Building Exterior",
    caption: "Exterior — Contemporary Apartment Tower",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
    alt: "Luxury Apartment Bedroom",
    caption: "Interior — Master Suite with City Views",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    alt: "Modern Apartment Kitchen",
    caption: "Interior — Gourmet Kitchen & Dining",
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

  const next = () => goTo((current + 1) % apartmentImages.length);

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
        {apartmentImages.map((img, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
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
          <span>{apartmentImages[current].caption}</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Click to next ›</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px', background: 'var(--background)' }}>
        {apartmentImages.map((_, i) => (
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

export default function ModernApartments() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* TOP SECTION */}
      <div className="product-split-layout">
        <div className="product-content">
          <ScrollAwake>
            <h1 className="brand-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block' }}>Modern Apartments</h1>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--foreground)' }}>At JAC MediaLand,</strong> we offer a curated selection of modern luxury apartments that redefine urban living. Our premium apartment portfolio is designed for those seeking a sophisticated, lock-and-leave lifestyle in the heart of the city's most desirable locations.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Our Approach:</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              We select apartments that stand out for their innovative design, exceptional use of space, and panoramic views. Our focus is on properties that provide world-class amenities, integrated smart home technology, and exquisite interior finishes, ensuring every residence feels like a bespoke sanctuary.
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
                <h3 className="feature-title">Sophisticated Layouts:</h3>
                <p>Enjoy thoughtfully designed open-plan living spaces that perfectly maximize square footage, enhance natural light flow, and create an ideal environment for both relaxing and entertaining.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Breathtaking Views:</h3>
                <p>Our handpicked apartments feature stunning floor-to-ceiling windows offering panoramic city skylines, tranquil waterfronts, or lush parkland views right from your living room.</p>
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
                <h3 className="feature-title">World-Class Amenities:</h3>
                <p>Gain access to exclusive building amenities including state-of-the-art fitness centers, rooftop infinity pools, 24/7 concierge services, and private resident lounges.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Smart Urban Living:</h3>
                <p>Experience the future of living with fully integrated smart home technologies, energy-efficient appliances, and climate control systems designed for ultimate convenience.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>

      </div>
    </div>
  );
}
