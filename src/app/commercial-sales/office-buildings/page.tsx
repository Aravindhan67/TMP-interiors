"use client";

import ScrollAwake from "@/components/ScrollAwake";
import Image from "next/image";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const officeImages = [
  {
    src: "/office_building_new.jpg",
    alt: "Modern Luxury Office Building — Exterior",
    caption: "Exterior — Aurora Tower, Business District",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    alt: "Modern Office Interior",
    caption: "Interior — Open-Plan Executive Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=900&q=80",
    alt: "Luxury Office Lobby",
    caption: "Interior — Grand Reception & Lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    alt: "Corporate Office Building Facade",
    caption: "Exterior — Premium Corporate Tower",
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

  const next = () => goTo((current + 1) % officeImages.length);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.2)' }}>
      {/* Slides — click image to advance */}
      <div
        onClick={next}
        style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', cursor: 'pointer' }}
        title="Click to see next image"
      >
        {officeImages.map((img, i) => (
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
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}

        {/* Caption */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.65))',
          padding: '2rem 1.5rem 1rem',
          color: '#fff',
          fontSize: '0.9rem',
          fontWeight: 500,
          letterSpacing: '0.5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          <span>{officeImages[current].caption}</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Click to next ›</span>
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px',
        background: 'var(--background)',
      }}>
        {officeImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              background: i === current ? 'var(--accent)' : 'var(--border-color)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function OfficeBuildings() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* TOP SECTION */}
      <div className="product-split-layout">
        <div className="product-content">
          <ScrollAwake>
            <h1 className="brand-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block' }}>Office Buildings</h1>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--foreground)' }}>At JAC MediaLand,</strong> we present a premier selection of modern office buildings designed to elevate your corporate presence. Our commercial portfolio features state-of-the-art properties that foster productivity, innovation, and brand prestige.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Our Approach:</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              We understand that an office building is the foundation of your business operations. Our curation focuses on architectural excellence, prime business district locations, flexible floor plates, and sustainable building technologies that meet the demands of modern enterprises.
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
                <h3 className="feature-title">Corporate Prestige:</h3>
                <p>Make a powerful statement with striking architectural designs, expansive glass facades, beautifully landscaped plazas, and impressive double-height lobby entrances.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Flexible Workspaces:</h3>
                <p>Benefit from highly adaptable floor plates designed to easily accommodate dynamic open-plan collaborative areas as well as private executive suites.</p>
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
                <h3 className="feature-title">Premium Amenities:</h3>
                <p>Attract and retain top talent with world-class on-site facilities including modern cafes, high-tech conference centers, fitness clubs, and secure subterranean parking.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Sustainable Design:</h3>
                <p>Future-proof your business with smart, eco-friendly infrastructure featuring LEED-certified standards, intelligent climate control, and advanced energy efficiency systems.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>

      </div>
    </div>
  );
}
