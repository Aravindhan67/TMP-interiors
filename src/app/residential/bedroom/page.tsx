"use client";

import ScrollAwake from "@/components/ScrollAwake";
import Image from "next/image";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const bedroomImages = [
  {
    src: "/bedroom_new.jpg",
    alt: "Modern Bedroom — Neutral & Serene",
    caption: "Design — Serene Master Suite with Garden Views",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
    alt: "Luxury White Bedroom",
    caption: "Design — Luxury Minimalist White Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    alt: "Modern Dark Bedroom",
    caption: "Design — Sophisticated Dark Tone Retreat",
  },
  {
    src: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=900&q=80",
    alt: "Cozy Bedroom with Fireplace",
    caption: "Design — Cosy Bedroom with Statement Headboard",
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

  const next = () => goTo((current + 1) % bedroomImages.length);

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
        {bedroomImages.map((img, i) => (
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
          <span>{bedroomImages[current].caption}</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Click to next ›</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px', background: 'var(--background)' }}>
        {bedroomImages.map((_, i) => (
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

export default function Bedroom() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* TOP SECTION */}
      <div className="product-split-layout">
        <div className="product-content">
          <ScrollAwake>
            <h1 className="brand-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block' }}>Bedroom</h1>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--foreground)' }}>At JAC MediaLand,</strong> we understand that your bedroom is your personal sanctuary, and our bedroom designs are crafted to offer a tranquil, restful environment that perfectly reflects your personal taste.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Our Approach:</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              We begin by understanding your ideal relaxation atmosphere and storage needs. From luxurious master suites to cozy guest rooms, we tailor the bed placement, lighting, color palette, and bespoke wardrobes to match your lifestyle, creating a peaceful and harmonious retreat.
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
                <h3 className="feature-title">Restful Aesthetics:</h3>
                <p>We focus on selecting calming color palettes, soft textures, and the perfect bed frame to ensure your bedroom is a serene haven.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Clever Storage:</h3>
                <p>Our designs incorporate bespoke wardrobes, under-bed storage, and integrated shelving to maximize space and keep your room clutter-free.</p>
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
                <h3 className="feature-title">Mood Lighting:</h3>
                <p>We design layered lighting schemes, from reading sconces to dimmable ambient lights, setting the perfect mood for relaxation.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Personalized Decor:</h3>
                <p>We blend custom headboards, premium bedding, and elegant accents to create a cohesive design that feels uniquely yours.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>

      </div>
    </div>
  );
}
