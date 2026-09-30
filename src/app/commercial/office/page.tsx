"use client";

import ScrollAwake from "@/components/ScrollAwake";
import Image from "next/image";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const officeWorkspaceImages = [
  {
    src: "/office_new.jpg",
    alt: "Modern Office Workspace — Collaborative",
    caption: "Design — Collaborative Open-Plan Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    alt: "Executive Office Suite",
    caption: "Design — Premium Executive Office Suite",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
    alt: "Private Office Room",
    caption: "Design — Focused Private Office Design",
  },
  {
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=900&q=80",
    alt: "Corporate Office Lounge",
    caption: "Design — Corporate Breakout & Lounge Area",
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

  const next = () => goTo((current + 1) % officeWorkspaceImages.length);

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
        {officeWorkspaceImages.map((img, i) => (
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
          <span>{officeWorkspaceImages[current].caption}</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Click to next ›</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px', background: 'var(--background)' }}>
        {officeWorkspaceImages.map((_, i) => (
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

export default function OfficeWorkspaces() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* TOP SECTION */}
      <div className="product-split-layout">
        <div className="product-content">
          <ScrollAwake>
            <h1 className="brand-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block' }}>Office Workspaces</h1>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--foreground)' }}>At JAC MediaLand,</strong> we understand that a well-designed office is crucial for productivity, collaboration, and brand identity. Our office workspace designs are crafted to enhance both employee well-being and operational efficiency.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Our Approach:</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              We begin by understanding your company culture, workflow, and space requirements. Our experienced designers work closely with you to create a customized layout that fosters creativity, accommodates various work styles, and reflects your brand's unique character.
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
                <h3 className="feature-title">Ergonomic Layouts:</h3>
                <p>We tailor the workspace layout to optimize space utilization and support different working styles, offering the perfect balance of open-plan areas and private focus zones.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Collaborative Zones:</h3>
                <p>Our designs incorporate smart collaborative spaces such as dynamic meeting rooms, huddle areas, and comfortable breakout zones to encourage teamwork and innovation.</p>
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
                <h3 className="feature-title">Brand Integration:</h3>
                <p>We seamlessly weave your company’s brand colors, logos, and ethos into the interior design, creating a space that inspires your team and impresses visiting clients.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Acoustic & Lighting Solutions:</h3>
                <p>We utilize sound-absorbing materials and strategically layered lighting to reduce distractions, minimize glare, and maintain a comfortable, productive environment.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>

      </div>
    </div>
  );
}
