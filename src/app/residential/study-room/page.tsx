"use client";

import ScrollAwake from "@/components/ScrollAwake";
import Image from "next/image";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const studyRoomImages = [
  {
    src: "/study_new.jpg",
    alt: "Home Study Room — Built-in Bookshelves",
    caption: "Design — Classic Study with Floor-to-Ceiling Library",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
    alt: "Modern Home Office Study",
    caption: "Design — Modern Minimalist Home Office",
  },
  {
    src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80",
    alt: "Dark Wood Study Room",
    caption: "Design — Executive Dark Wood Study",
  },
  {
    src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900&q=80",
    alt: "Bright Scandinavian Study",
    caption: "Design — Bright Scandinavian Workspace",
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

  const next = () => goTo((current + 1) % studyRoomImages.length);

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
        {studyRoomImages.map((img, i) => (
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
          <span>{studyRoomImages[current].caption}</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Click to next ›</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px', background: 'var(--background)' }}>
        {studyRoomImages.map((_, i) => (
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

export default function StudyRoom() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* TOP SECTION */}
      <div className="product-split-layout">
        <div className="product-content">
          <ScrollAwake>
            <h1 className="brand-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block' }}>Study Room</h1>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--foreground)' }}>At JAC MediaLand,</strong> we understand that a study room should be a haven of focus and inspiration. Our study room interior designs are crafted to create an elegant, distraction-free environment that boosts productivity and creativity.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Our Approach:</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              We begin by analyzing your workflow, storage needs, and aesthetic preferences. Our design team focuses on ergonomic comfort, optimal lighting, and intelligent organization, creating a personalized workspace that helps you achieve your best work.
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
                <h3 className="feature-title">Ergonomic Comfort:</h3>
                <p>We prioritize your physical well-being by designing custom desks and selecting premium ergonomic seating that supports focus and comfort during long working hours.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Intelligent Storage:</h3>
                <p>Our designs feature bespoke floor-to-ceiling bookshelves, integrated cabinetry, and concealed filing systems to keep your workspace impeccably organized and clutter-free.</p>
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
                <h3 className="feature-title">Optimal Lighting:</h3>
                <p>We craft layered lighting schemes that combine natural light optimization with dedicated task lighting to reduce eye strain and maintain an energetic, focused atmosphere.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Inspiring Aesthetics:</h3>
                <p>We blend sophisticated color palettes with rich, premium materials like natural wood and leather to create an environment that stimulates both focus and creative thought.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>

      </div>
    </div>
  );
}
